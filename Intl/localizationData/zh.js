export default {
  locale: 'zh',
  messages: {
    siteTitle: '人才工程',
    addPost: '创建博客',
    switchLanguage: '切换语言',
    twitterMessage: '微博',
    by: 'By',
    deletePost: '删除博客',
    createNewPost: '发微博',
    createNewUser:'新用户注册',
    user_registeration:'会员注册',
    authorName: '用户名',
    postTitle: '标题',
    postContent: '内容',
    submit: '提交',
    comment: `user {name} {value, plural,
    	  =0 {没有评论}
    	  =1 {有 # 条评论}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {没有 <i style='font-style: italic'>any</i> 评论}
    	  =1 {有 <i style='font-style: italic'>#</i> 条评论}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {没有评论}
    	  =1 {有 # 条评论}
    	  other {has # comments}
    	} as of {date}`,
  },
};
