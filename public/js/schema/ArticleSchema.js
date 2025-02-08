// console.log(blogData, business_data_fr)





function stripHTML(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": blogData.title,
  "about": blogData.category.category_name,
  "articleBody": stripHTML(blogData.html_content),
  "datePublished": blogData.datetime_published,
  "dateModified": blogData.datetime_edited,
  "inLanguage": blogData.lang,
  "author": {
    "@type": "Organization",
    "url": `${business_data_fr.website_main_url}/organisation`
  },
  "publisher": {
    "@type": "Organization",
    "name": `${business_data_fr.business_name}`,
    "logo": {
      "@type": "ImageObject",
      "url": `${business_data_fr.website_main_url}/img/logo_head2.png`
    }
  }
};





const scriptElement2 = document.createElement('script');
scriptElement2.type = 'application/ld+json';

// console.log("\n\nblogPostingSchema -> ", blogPostingSchema)


scriptElement2.text = JSON.stringify(articleSchema);
document.head.appendChild(scriptElement2);