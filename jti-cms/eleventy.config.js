module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addFilter("head", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addPassthroughCopy({ "src/static/our-story": "our-story" });
  eleventyConfig.addPassthroughCopy({ "src/static/thanks": "thanks" });
  eleventyConfig.addPassthroughCopy({ "src/static/404.html": "404.html" });
  eleventyConfig.addFilter("where", (arr, key, val) => (arr || []).filter(i => (i.data ? i.data[key] : i[key]) === val));
  eleventyConfig.ignores.add("src/static/**");

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
