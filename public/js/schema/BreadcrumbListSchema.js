// console.log(blog_elements_fr);
// console.log('\n\n')
// console.log(main_service_data_fr); // main services
// console.log('\n\n')
// console.log(extra_service_pages_fr); // extra services



// Function to generate breadcrumb list schema
function generateBreadcrumbListSchema(blogElements, servicePages) {

  // console.log("(1)", main_service_data_fr); // main services

  const itemListElement = [];




  // Static breadcrumb items
  let staticItems = [
    { name: "##", item: "https://opom.ca/" },
    { name: "Request Free Quote", item: "https://opom.ca/contact" },
    { name: "Organisation", item: "https://opom.ca/organisation" },
    { name: "À propos", item: "https://opom.ca/a-propos" },
    { name: "Plan du site", item: "https://opom.ca/plan-du-site" },
    { name: "Avertissement légal", item: "https://opom.ca/tiroir1/avertissement-legal" },
    { name: "Politique de confidentialité", item: "https://opom.ca/tiroir1/politique-de-confidentialite" },
    // { name: "Service name 1", item: "https://opom.ca/seo/service1" },
    // { name: "Service name 2", item: "https://opom.ca/seo/service2" },
    // { name: "Service name 3", item: "https://opom.ca/seo/service3" }
  ];

  // Generate service breadcrumb items from service data
  main_service_data_fr = main_service_data_fr.map(service => ({
    name: service.service_name,
    item: service.service_page_url
  }));


  // Combine static and service breadcrumb items
  staticItems = [...staticItems, ...main_service_data_fr];


  // console.log("HERE", staticItems)



  // Add static items
  staticItems.forEach((item, index) => {
    itemListElement.push({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    });
  });



  // Add service pages
  servicePages.forEach((page, index) => {
    itemListElement.push({
      "@type": "ListItem",
      "position": staticItems.length + index + 1,
      "name": page.title,
      "item": `https://opom.ca/seo/${page.slug}`
    });
  });

  // Add blog elements
  blogElements.forEach((element, index) => {

    // console.log(element)
    itemListElement.push({
      "@type": "ListItem",
      "position": staticItems.length + servicePages.length + index + 1,
      "name": element.title,
      "item": `https://opom.ca/blog/${element.category.slug}/blog-posting/${element.slug}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
}







const script3 = document.createElement('script');
script3.type = 'application/ld+json';


// Generate the breadcrumb list schema
const breadcrumbListSchema = generateBreadcrumbListSchema(blog_elements_fr, extra_service_pages_fr);


// console.log("\n(1)->\n", breadcrumbListSchema, "\n\n");
// console.log("\n(2)->\n",JSON.stringify(breadcrumbListSchema, null, 2), "\n\n");


const text3 = JSON.stringify(breadcrumbListSchema, null, 2)



// console.log("\n\n(0)->\n\n", text3)


script3.text = text3
document.head.appendChild(script3);