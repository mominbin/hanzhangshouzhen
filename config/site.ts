export interface Service {
  icon: string
  title: string
  desc: string
  featured: boolean
}

export interface Project {
  id: string
  name: string
  type: string
  category: string
  description: string
  image: string
  tech: string[]
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface Partner {
  name: string
  logo: string
}

export interface Testimonial {
  name: string
  title: string
  content: string
  avatar: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  company: {
    name: string
    shortName: string
    slogan: string
    tagline: string
    description: string
    icp: string
    founded: number
  }
  contact: {
    email: string
    phone: string
    wechat: string
    address: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  services: Service[]
  projects: Project[]
  stats: Stat[]
  partners: Partner[]
  testimonials: Testimonial[]
  nav: NavItem[]
  seo: {
    title: string
    description: string
    keywords: string
  }
  social: {
    github: string
    juejin: string
  }
}

export const siteConfig: SiteConfig = {
  company: {
    name: '上海含章收珍软件科技有限公司',
    shortName: '含章收珍',
    slogan: '用代码创造价值',
    tagline: '含章可贞，收珍聚宝 — 以技术匠心为客户创造数字化价值',
    description: '专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发',
    icp: '沪ICP备XXXXXXXX号',
    founded: 2024,
  },
  contact: {
    email: 'contact@hanzhangshouzhen.com',
    phone: '400-XXX-XXXX',
    wechat: 'hanzhangshouzhen',
    address: '上海市浦东新区',
  },
  hero: {
    badge: '🚀 专业软件开发团队',
    title: '用代码创造价值',
    subtitle: '专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发',
    primaryCta: '免费咨询',
    secondaryCta: '查看案例',
  },
  services: [
    {
      icon: '📱',
      title: '移动App开发',
      desc: 'iOS / Android 原生及跨平台开发，Flutter/React Native 技术栈，从UI设计到应用商店上架全流程服务',
      featured: true,
    },
    {
      icon: '🖥️',
      title: '管理平台开发',
      desc: '企业级 Web 管理系统，数据可视化大屏、流程自动化、权限管理、报表中心，提升运营效率',
      featured: true,
    },
    {
      icon: '📦',
      title: '小程序开发',
      desc: '微信生态全链路开发，从账号申请、功能开发到上线运营一站式服务，覆盖电商、预约、社区等场景',
      featured: false,
    },
    {
      icon: '🌐',
      title: '企业官网开发',
      desc: '品牌展示型网站设计与开发，SEO 优化、响应式设计、高性能加载，打造专业企业形象',
      featured: false,
    },
  ],
  projects: [
    {
      id: '1',
      name: '智慧门店管理平台',
      type: '管理平台',
      category: '管理平台',
      description: '为连锁零售企业打造的综合性门店管理系统，包含进销存、会员管理、数据分析、库存预警等功能模块，帮助企业实现数字化运营转型。',
      image: '/images/projects/project1.jpg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    },
    {
      id: '2',
      name: 'FitLife 健身App',
      type: '移动App',
      category: '移动App',
      description: '面向健身爱好者的移动应用，支持AI训练计划定制、饮食营养记录、社区互动分享、运动数据追踪等功能。',
      image: '/images/projects/project2.jpg',
      tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'GraphQL'],
    },
  ],
  stats: [
    { label: '完成项目', value: 20, suffix: '+' },
    { label: '服务客户', value: 15, suffix: '+' },
    { label: '技术团队', value: 10, suffix: '人+' },
    { label: '行业经验', value: 5, suffix: '年+' },
  ],
  partners: [
    { name: '腾讯云', logo: '/images/partners/tencent.png' },
    { name: '阿里云', logo: '/images/partners/alibaba.png' },
    { name: '华为云', logo: '/images/partners/huawei.png' },
    { name: 'AWS', logo: '/images/partners/aws.png' },
  ],
  testimonials: [
    {
      name: '张总',
      title: '某连锁零售企业 CIO',
      content: '含章收珍团队为我们的门店管理系统提供了优质的技术方案，项目交付准时，售后响应及时，非常推荐！',
      avatar: '/images/avatars/avatar1.jpg',
    },
    {
      name: '李总',
      title: '某互联网公司 CEO',
      content: '从零到一帮我们搭建了移动App，技术能力和沟通效率都很出色，已经是我们的长期技术合作伙伴。',
      avatar: '/images/avatars/avatar2.jpg',
    },
  ],
  nav: [
    { label: '首页', href: '#hero' },
    { label: '服务', href: '#services' },
    { label: '案例', href: '#projects' },
    { label: '关于', href: '#about' },
    { label: '联系', href: '#contact' },
  ],
  seo: {
    title: '上海含章收珍软件科技 | 专业软件开发定制服务',
    description: '上海含章收珍软件科技有限公司，专注企业管理平台、移动App、小程序、企业官网定制开发，提供全方位软件解决方案。',
    keywords: '软件开发,小程序开发,移动App开发,企业管理平台,上海软件公司,定制开发',
  },
  social: {
    github: 'https://github.com/hanzhangshouzhen',
    juejin: '',
  },
}
