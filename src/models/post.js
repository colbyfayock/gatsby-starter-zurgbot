class Post {
  constructor(node) {
    this.title = node.frontmatter.title;
    this.path = node.fields.slug;
    this.date = node.frontmatter.date;
    this.template = node.frontmatter.template;
    this.excerpt = node.excerpt;
    this.html = node.html;
  }
}

export default Post;
