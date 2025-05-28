export interface NewsItem {
  id: string
  date: string
  title: string
  content?: string
  link?: string
  image: string
  tag: string
  isExternal?: boolean
}

export const newsData: {
  ja: NewsItem[]
  en: NewsItem[]
} = {
  ja: [
    {
      id: "tel-visit-2025",
      date: "2025年2月19日",
      title: "東京エレクトロン様のOB訪問がありました。",
      link: "/career",
      image: "/images/tel_logo.png",
      tag: "産学連携"
    },
    {
      id: "sakura-science-2025",
      date: "2025年2月17日", 
      title: "JSTさくらサイエンスプログラムにて海外より招聘者８名（ケニア3名・マレーシア5名）を受け入れ、国際交流を実施しました。",
      link: "/activities/sakura-science",
      image: "/images/sakura2025s1.jpg",
      tag: "国際連携"
    },
    {
      id: "research-project-page-2024",
      date: "2024年12月3日",
      title: "研究一覧のページを作成しました。",
      link: "/research/projects", 
      image: "/images/news-research-project.png",
      tag: "研究室運営"
    },
    {
      id: "web-renewal-2024",
      date: "2024年11月8日",
      title: "ホームページをリニューアルしました。",
      image: "/images/web_renewal.png",
      tag: "研究室運営"
    },
    {
      id: "tunn-cho-lwin-nokoh-2024",
      date: "2024年11月5日",
      title: "Tunn Cho LwinさんがNOKOH Student Seminar in English 2024でThe Best Presentation Awardを受賞しました。",
      link: "/achievements",
      image: "",
      tag: "学生活動"
    },
    {
      id: "tunn-cho-lwin-icicic-2024",
      date: "2024年10月13日",
      title: "Tunn Cho LwinさんらがICICIC2024でBest Presentation Awardを受賞しました。",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "su-myat-noe-icgec-2024",
      date: "2024年8月28-29日",
      title: "Su Myat NoeさんらがICGEC2024でBest Paper Awardを受賞しました。",
      link: "https://www.miyazaki-u.ac.jp/jisedai/topics/news/post-43.html",
      image: "/images/SMN_3.jpg",
      tag: "研究成果",
      isExternal: true
    },
    {
      id: "myanmar-researcher-2024",
      date: "2024年5月31日",
      title: "ミャンマーからの研究員一名が、本研究室に配属されました。",
      link: "/members#faculty",
      image: "",
      tag: "国際連携"
    },
    {
      id: "student-assignment-2024",
      date: "2024年4月1日",
      title: "学部4年生6名（内2名椎屋研究室）が本研究室に配属、修士課程1年に5名、博士後期課程1名が入学しました。",
      link: "/members#students",
      image: "",
      tag: "学生活動"
    },
    {
      id: "su-myat-noe-ncsp-2024",
      date: "2024年3月1日",
      title: "Su Myat NoeさんらがNCSP'24でStudent Paper Awardを受賞しました。",
      link: "https://www.miyazaki-u.ac.jp/jisedai/topics/news/post-36.html",
      image: "/images/SMN_4.jpg",
      tag: "研究成果",
      isExternal: true
    },
    {
      id: "icicic-2023",
      date: "2023年8月30日",
      title: "本研究室より3名が The 17th International Conference on Innovative Computing, Information and Control (ICICIC2023) に参加しました。",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "hashimoto-assignment-2023",
      date: "2023年8月24日",
      title: "追手門学院大学経営学部経営学科講師の橋本幸枝さんが本研究室に配属されました。",
      link: "/members#faculty",
      image: "",
      tag: "研究室運営"
    },
    {
      id: "myanmar-researcher-2023",
      date: "2023年8月11日",
      title: "ミャンマーからの研究員一名が、本研究室に配属されました。",
      link: "/members#faculty",
      image: "",
      tag: "国際連携"
    },
    {
      id: "jka-grant-2023",
      date: "2023年5月25日",
      title: "公益財団法人JKAの「2023年度補助事業 機械振興補助事業複数年研究」に採択されました。テーマ：酪農・畜産業のDX化による牛の健康管理システムの開発　期間：～2025年3月31日",
      link: "https://www.jka-cycle.jp/",
      image: "",
      tag: "産学連携",
      isExternal: true
    },
    {
      id: "student-assignment-2023",
      date: "2023年4月1日",
      title: "学部4年生7名（内2名椎屋研究室）が本研究室に配属、修士課程1年に3名、博士後期課程1年が入学しました。",
      link: "/members#students",
      image: "",
      tag: "学生活動"
    },
    {
      id: "ye-htet-nokoh-2022",
      date: "2022年11月1日",
      title: "Ye Htet さんが NOKOH Student Seminar in English 2022 で宮崎大学学長賞を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "学生活動"
    },
    {
      id: "myanmar-student-arrival-2022-10",
      date: "2022年10月4日",
      title: "ミャンマーからの留学生一名が、本研究室に配属されました。",
      link: "https://www.miyazaki-u.ac.jp/newsrelease/international-info/post-882.html",
      image: "",
      tag: "国際連携",
      isExternal: true
    },
    {
      id: "myanmar-research-student-2022",
      date: "2022年10月4日",
      title: "ミャンマーからの研究学生一名が、本研究室に配属されました。",
      link: "/members#students",
      image: "",
      tag: "国際連携"
    },
    {
      id: "master-graduation-2022",
      date: "2022年9月29日",
      title: "本研究室の学生一名が、修士課程を修了しました。ご修了おめでとうございます！",
      link: "http://www.miyazaki-u.ac.jp/newsrelease/edu-info/4-24.html",
      image: "",
      tag: "学生活動",
      isExternal: true
    },
    {
      id: "hayashida-award-2022",
      date: "2022年8月16日",
      title: "林田 高典 さんが令和3年度 工学研究科長賞を受賞しました。",
      link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/award_m_r03.pdf",
      image: "",
      tag: "学生活動",
      isExternal: true
    },
    {
      id: "myanmar-student-arrival-2022-05",
      date: "2022年5月22日",
      title: "ミャンマーからの留学生が宮崎に到着しました！",
      link: "/members#students",
      image: "",
      tag: "国際連携"
    },
    {
      id: "student-assignment-2022",
      date: "2022年4月5日",
      title: "学部4年生7名（内2名椎屋研究室）が本研究室に配属、修士課程1年に7名、博士後期課程1名が入学しました。",
      link: "/members#students",
      image: "",
      tag: "学生活動"
    },
    {
      id: "cho-cho-aye-isikm-2022",
      date: "2022年3月31日",
      title: "Cho Cho Aye さんらが、2022年3月25日-26日の2日間、広州市（中国）及び熊本県で開催された ISIKM2022 で Best Presentation Award を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "cho-cho-mar-lifetech-2022",
      date: "2022年3月31日",
      title: "Cho Cho Mar さんらが、2022年3月7日-9日の3日間、大阪府で開催された IEEE LifeTech 2022 で WIE Student Paper Award を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "graduation-2022",
      date: "2022年3月24日",
      title: "シーガイアで卒業式・終了式が行われ、本研究室の学生11名が参加しました。卒業・終了生の新天地でのご活躍を期待しています！",
      content: "シーガイアで卒業式・終了式が行われ、本研究室の学生11名が参加しました。卒業・終了生の新天地でのご活躍を期待しています！",
      image: "",
      tag: "学生活動"
    },
    {
      id: "lifetech-presentation-2022",
      date: "2022年3月9日",
      title: "本研究室の学生5名が、IEEE LifeTech 2022 で発表しました。",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "lifetech-announcement-2022",
      date: "2022年1月26日",
      title: "本研究室の学生5名が、IEEE LifeTech 2022 で発表します。",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "mrt-tv-feature-2022",
      date: "2022年1月14日",
      title: "MRT宮崎放送様の夕方情報番組「Check!」において、本研究室が紹介されました。",
      link: "https://www.miyazaki-u.ac.jp/newsrelease/notice-info/mrtcheck.html",
      image: "",
      tag: "研究室運営",
      isExternal: true
    },
    {
      id: "web-renewal-2021",
      date: "2021年12月17日",
      title: "本研究室のホームページをリニューアルしました。",
      content: "本研究室のホームページをリニューアルしました。",
      image: "",
      tag: "研究室運営"
    },
    {
      id: "local5g-project-2021",
      date: "2021年10月25日",
      title: "株式会社NTTデータ経営研究所様を代表機関として、株式会社NTTドコモ北海道支社様、ホクレン農業協同組合連合会様、北海道イシダ株式会社様、きたみらい農業協同組合様、訓子府町様の6者と連携した共同プロジェクト「産学官連携によるローカル5Gを用いたスマート農業の実現に向けた実証実験」を開始しました｡",
      link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20211025.pdf",
      image: "",
      tag: "産学連携",
      isExternal: true
    },
    {
      id: "hayashida-gcce-2021",
      date: "2021年10月15日",
      title: "林田 高典 さんらが、2021年10月12日-15日の4日間、京都市で開催された IEEE GCCE 2021 で Excellent Paper Award Gold Prize を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "gcce-presentation-2021",
      date: "2021年10月15日",
      title: "本研究室の学生3名が、IEEE GCCE 2021 で発表しました。",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "gcce-announcement-2021",
      date: "2021年7月28日",
      title: "本研究室の学生3名が、IEEE GCCE 2021 で発表します。",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "su-myat-noe-lifetech-2021",
      date: "2021年5月21日",
      title: "Su Myat Noe さんらが、2021年3月9日-11日の3日間、奈良市で開催された IEEE LifeTech 2021 で WIE Student Paper Award を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "student-assignment-2021",
      date: "2021年4月6日",
      title: "学部4年生8名（内2名椎屋研究室）、修士課程1年生6名が本研究室に配属されました。",
      link: "/members#students",
      image: "",
      tag: "学生活動"
    },
    {
      id: "5g-cattle-monitoring-2019",
      date: "2019年12月24日",
      title: "株式会社国際電気通信基礎技術研究所（ATR）様、KDDI株式会社様、北海道河東郡上士幌町様、とかち村上牧場様と連携し「牛舎内で5Gを活用し、従業員の作業効率化を支援する実証試験」を実施しました。",
      link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20191224.pdf",
      image: "",
      tag: "産学連携",
      isExternal: true
    },
    {
      id: "mitsui-imecs-2019",
      date: "2019年1月19日",
      title: "三井 優一 さんらが、2018年3月14日-16日の3日間、香港で開催された IMECS 2018 で Best Student Paper Award を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "radia-soli-2018",
      date: "2018年8月31日",
      title: "Radia EL BACHA さんらが、2018年7月31日-8月2日の3日間、シンガポールで開催された SOLI 2018 で Best Student Paper Award を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    },
    {
      id: "imamura-gcce-2017",
      date: "2017年11月10日",
      title: "今村 颯介 さんらが、2017年10月24日-27日の4日間、名古屋市で開催された IEEE GCCE 2017 で Student Paper Award 1st Prize を受賞しました！おめでとうございます！",
      link: "/achievements",
      image: "",
      tag: "研究成果"
    }
  ],
  en: [
    {
      id: "tel-visit-2025",
      date: "February 19, 2025",
      title: "Tokyo Electron alumni visited our laboratory.",
      link: "/career",
      image: "/images/tel_logo.png",
      tag: "Industry-Academia Collaboration"
    },
    {
      id: "sakura-science-2025",
      date: "February 17, 2025",
      title: "We hosted 8 international visitors (3 from Kenya, 5 from Malaysia) through the JST Sakura Science Program for international exchange.",
      link: "/activities/sakura-science",
      image: "/images/sakura2025s1.jpg",
      tag: "International Collaboration"
    },
    {
      id: "research-project-page-2024",
      date: "December 3, 2024",
      title: "Created a research projects listing page.",
      link: "/research/projects",
      image: "/images/news-research-project.png",
      tag: "Laboratory Management"
    },
    {
      id: "web-renewal-2024",
      date: "November 8, 2024",
      title: "Renewed our website.",
      image: "/images/web_renewal.png",
      tag: "Laboratory Management"
    },
    {
      id: "tunn-cho-lwin-nokoh-2024",
      date: "November 5, 2024",
      title: "Tunn Cho Lwin received The Best Presentation Award at NOKOH Student Seminar in English 2024.",
      link: "/achievements",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "tunn-cho-lwin-icicic-2024",
      date: "October 13, 2024",
      title: "Tunn Cho Lwin et al. received Best Presentation Award at ICICIC2024.",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "su-myat-noe-icgec-2024",
      date: "August 28-29, 2024",
      title: "Su Myat Noe et al. received Best Paper Award at ICGEC2024.",
      link: "https://www.miyazaki-u.ac.jp/jisedai/topics/news/post-43.html",
      image: "/images/SMN_3.jpg",
      tag: "Research Achievements",
      isExternal: true
    },
    {
      id: "myanmar-researcher-2024",
      date: "May 31, 2024",
      title: "A researcher from Myanmar was assigned to our laboratory.",
      link: "/members#faculty",
      image: "",
      tag: "International Collaboration"
    },
    {
      id: "student-assignment-2024",
      date: "April 1, 2024",
      title: "6 undergraduate students (including 2 from Shiiya Lab) were assigned to our lab, 5 master's students and 1 doctoral student enrolled.",
      link: "/members#students",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "su-myat-noe-ncsp-2024",
      date: "March 1, 2024",
      title: "Su Myat Noe et al. received Student Paper Award at NCSP'24.",
      link: "https://www.miyazaki-u.ac.jp/jisedai/topics/news/post-36.html",
      image: "/images/SMN_4.jpg",
      tag: "Research Achievements",
      isExternal: true
    },
    {
      id: "icicic-2023",
      date: "August 30, 2023",
      title: "3 members from our laboratory participated in The 17th International Conference on Innovative Computing, Information and Control (ICICIC2023).",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "hashimoto-assignment-2023",
      date: "August 24, 2023",
      title: "Yukie Hashimoto, lecturer at Otemon Gakuin University Faculty of Business Administration, was assigned to our laboratory.",
      link: "/members#faculty",
      image: "",
      tag: "Laboratory Management"
    },
    {
      id: "myanmar-researcher-2023",
      date: "August 11, 2023",
      title: "A researcher from Myanmar was assigned to our laboratory.",
      link: "/members#faculty",
      image: "",
      tag: "International Collaboration"
    },
    {
      id: "jka-grant-2023",
      date: "May 25, 2023",
      title: "Our proposal was accepted for JKA's '2023 Subsidized Project for Machine Industry Promotion Multi-year Research'. Theme: Development of cattle health management system through DX of dairy and livestock industry. Period: Until March 31, 2025",
      link: "https://www.jka-cycle.jp/",
      image: "",
      tag: "Industry-Academia Collaboration",
      isExternal: true
    },
    {
      id: "student-assignment-2023",
      date: "April 1, 2023",
      title: "7 undergraduate students (including 2 from Shiiya Lab) were assigned to our lab, 3 master's students and 1 doctoral student enrolled.",
      link: "/members#students",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "ye-htet-nokoh-2022",
      date: "November 1, 2022",
      title: "Ye Htet received the Miyazaki University President's Award at NOKOH Student Seminar in English 2022! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "myanmar-student-arrival-2022-10",
      date: "October 4, 2022",
      title: "An international student from Myanmar was assigned to our laboratory.",
      link: "https://www.miyazaki-u.ac.jp/newsrelease/international-info/post-882.html",
      image: "",
      tag: "International Collaboration",
      isExternal: true
    },
    {
      id: "myanmar-research-student-2022",
      date: "October 4, 2022",
      title: "A research student from Myanmar was assigned to our laboratory.",
      link: "/members#students",
      image: "",
      tag: "International Collaboration"
    },
    {
      id: "master-graduation-2022",
      date: "September 29, 2022",
      title: "One student from our laboratory completed the master's program. Congratulations on your graduation!",
      link: "http://www.miyazaki-u.ac.jp/newsrelease/edu-info/4-24.html",
      image: "",
      tag: "Student Activities",
      isExternal: true
    },
    {
      id: "hayashida-award-2022",
      date: "August 16, 2022",
      title: "Takanori Hayashida received the 2021 Graduate School of Engineering Dean's Award.",
      link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/award_m_r03.pdf",
      image: "",
      tag: "Student Activities",
      isExternal: true
    },
    {
      id: "myanmar-student-arrival-2022-05",
      date: "May 22, 2022",
      title: "An international student from Myanmar arrived in Miyazaki!",
      link: "/members#students",
      image: "",
      tag: "International Collaboration"
    },
    {
      id: "student-assignment-2022",
      date: "April 5, 2022",
      title: "7 undergraduate students (including 2 from Shiiya Lab) were assigned to our lab, 7 master's students and 1 doctoral student enrolled.",
      link: "/members#students",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "cho-cho-aye-isikm-2022",
      date: "March 31, 2022",
      title: "Cho Cho Aye et al. received Best Presentation Award at ISIKM2022 held in Guangzhou (China) and Kumamoto Prefecture on March 25-26, 2022! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "cho-cho-mar-lifetech-2022",
      date: "March 31, 2022",
      title: "Cho Cho Mar et al. received WIE Student Paper Award at IEEE LifeTech 2022 held in Osaka Prefecture on March 7-9, 2022! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "graduation-2022",
      date: "March 24, 2022",
      title: "Graduation and completion ceremonies were held at Seagaia, with 11 students from our laboratory participating. We look forward to the success of our graduates in their new endeavors!",
      content: "Graduation and completion ceremonies were held at Seagaia, with 11 students from our laboratory participating. We look forward to the success of our graduates in their new endeavors!",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "lifetech-presentation-2022",
      date: "March 9, 2022",
      title: "5 students from our laboratory presented at IEEE LifeTech 2022.",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "lifetech-announcement-2022",
      date: "January 26, 2022",
      title: "5 students from our laboratory will present at IEEE LifeTech 2022.",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "mrt-tv-feature-2022",
      date: "January 14, 2022",
      title: "Our laboratory was featured on MRT Miyazaki Broadcasting's evening information program 'Check!'.",
      link: "https://www.miyazaki-u.ac.jp/newsrelease/notice-info/mrtcheck.html",
      image: "",
      tag: "Laboratory Management",
      isExternal: true
    },
    {
      id: "web-renewal-2021",
      date: "December 17, 2021",
      title: "Renewed our laboratory's website.",
      content: "Renewed our laboratory's website.",
      image: "",
      tag: "Laboratory Management"
    },
    {
      id: "local5g-project-2021",
      date: "October 25, 2021",
      title: "Started a collaborative project 'Demonstration experiment for realizing smart agriculture using local 5G through industry-academia-government collaboration' with NTT Data Institute of Management Consulting, Inc. as the lead organization, in partnership with NTT DOCOMO Hokkaido, Hokuren Federation of Agricultural Cooperatives, Hokkaido Ishida Co., Ltd., Kitamirai Agricultural Cooperative, and Kunneppu Town.",
      link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20211025.pdf",
      image: "",
      tag: "Industry-Academia Collaboration",
      isExternal: true
    },
    {
      id: "hayashida-gcce-2021",
      date: "October 15, 2021",
      title: "Takanori Hayashida et al. received Excellent Paper Award Gold Prize at IEEE GCCE 2021 held in Kyoto on October 12-15, 2021! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "gcce-presentation-2021",
      date: "October 15, 2021",
      title: "3 students from our laboratory presented at IEEE GCCE 2021.",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "gcce-announcement-2021",
      date: "July 28, 2021",
      title: "3 students from our laboratory will present at IEEE GCCE 2021.",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "su-myat-noe-lifetech-2021",
      date: "May 21, 2021",
      title: "Su Myat Noe et al. received WIE Student Paper Award at IEEE LifeTech 2021 held in Nara on March 9-11, 2021! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "student-assignment-2021",
      date: "April 6, 2021",
      title: "8 undergraduate students (including 2 from Shiiya Lab) and 6 master's students were assigned to our laboratory.",
      link: "/members#students",
      image: "",
      tag: "Student Activities"
    },
    {
      id: "5g-cattle-monitoring-2019",
      date: "December 24, 2019",
      title: "Conducted a demonstration experiment 'Supporting employee work efficiency using 5G in cattle barns' in collaboration with Advanced Telecommunications Research Institute International (ATR), KDDI Corporation, Kamishihoro Town in Hokkaido, and Tokachi Murakami Ranch.",
      link: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/topic_20191224.pdf",
      image: "",
      tag: "Industry-Academia Collaboration",
      isExternal: true
    },
    {
      id: "mitsui-imecs-2019",
      date: "January 19, 2019",
      title: "Yuichi Mitsui et al. received Best Student Paper Award at IMECS 2018 held in Hong Kong on March 14-16, 2018! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements"
    },
    {
      id: "radia-soli-2018",
      date: "August 31, 2018",
      title: "Radia EL BACHA et al. received Best Student Paper Award at SOLI 2018 held in Singapore on July 31-August 2, 2018! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements",
      isExternal: true
    },
    {
      id: "imamura-gcce-2017",
      date: "November 10, 2017",
      title: "Sosuke Imamura et al. received Student Paper Award 1st Prize at IEEE GCCE 2017 held in Nagoya on October 24-27, 2017! Congratulations!",
      link: "/achievements",
      image: "",
      tag: "Research Achievements",
      isExternal: true
    }
  ]
}

// タグの定義
export const newsTags = {
  ja: [
    "すべて",
    "学生活動",    // 学生の受賞、発表、卒業、配属など
    "研究成果",    // 論文発表、受賞、学会発表など
    "国際連携",    // 国際会議、留学生、海外研究者など
    "産学連携",    // 企業との共同研究、実証実験、OB訪問など
    "研究室運営"   // メンバー配属、設備更新、ウェブサイト更新など
  ],
  en: [
    "All",
    "Student Activities",
    "Research Achievements", 
    "International Collaboration",
    "Industry-Academia Collaboration",
    "Laboratory Management"
  ]
}

