import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, organization, email, phone, subject, message } = await request.json()

    // 必須フィールドのチェック
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須フィールドが入力されていません' },
        { status: 400 }
      )
    }

    // 環境変数のチェック
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail環境変数が設定されていません')
      return NextResponse.json(
        { error: 'メール設定が正しくありません。管理者にお問い合わせください。' },
        { status: 500 }
      )
    }

    console.log('メール送信開始:', { name, email, subject })

    // Gmailを使用したメール送信設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // メール内容
    const mailOptions = {
      from: `"大学研究室 お問い合わせ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Gmailアドレスのみに送信
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h3>新しいお問い合わせが届きました</h3>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>所属組織:</strong> ${organization || '未記入'}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>電話番号:</strong> ${phone || '未記入'}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr>
        <p><small>このメールは大学研究室のWebサイトから送信されました。</small></p>
        <p><small>送信日時: ${new Date().toLocaleString('ja-JP')}</small></p>
      `,
      replyTo: email,
    }

    // メール送信
    const result = await transporter.sendMail(mailOptions)
    console.log('メール送信成功:', {
      messageId: result.messageId,
      to: mailOptions.to,
      subject: mailOptions.subject
    })

    return NextResponse.json({ 
      success: true, 
      message: 'お問い合わせを正常に送信しました。ありがとうございます。' 
    })
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: `メール送信に失敗しました: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}