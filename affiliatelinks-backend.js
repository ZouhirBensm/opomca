const middleware4 = require('./lifecycle/middleware/mid4')

// Router towards /ral
const express = require('express')
const affiliateLinks_app_router = express.Router()



// https://opom.ca/ral/one
affiliateLinks_app_router.get('/one', (req,res)=>{
  return res.redirect('https://b0a443z2g-s6kv0l5qlb06pff6.hop.clickbank.net');
})

// fe: Front-end
// https://opom.ca/ral/one-fe
affiliateLinks_app_router.get('/one-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-one');
})

// https://opom.ca/ral/two
affiliateLinks_app_router.get('/two', (req,res)=>{
  return res.redirect('https://44b61e35k2x3ry1onmodm0qntz.hop.clickbank.net');
})

// https://opom.ca/ral/three
affiliateLinks_app_router.get('/three', (req,res)=>{
  return res.redirect('https://ecd8a0x2t1ucoz1o0ackl3qp1a.hop.clickbank.net');
})



// https://opom.ca/ral/four
affiliateLinks_app_router.get('/four', (req,res)=>{
  return res.redirect('https://0ffac9yclat0r206j8yels0zew.hop.clickbank.net');
})


// https://opom.ca/ral/four-fe
affiliateLinks_app_router.get('/four-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-four');
})

// https://opom.ca/ral/five
affiliateLinks_app_router.get('/five', (req,res)=>{
  return res.redirect('https://www.kqzyfj.com/click-100957645-12332060');
})


// https://opom.ca/ral/six
affiliateLinks_app_router.get('/six', (req,res)=>{
  return res.redirect('https://trynoha.com/?ref=zou');
})


// https://opom.ca/ral/six-fe
affiliateLinks_app_router.get('/six-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-six');
})


// https://opom.ca/ral/seven-fe
affiliateLinks_app_router.get('/seven-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-seven');
})


// https://opom.ca/ral/eight-fe
affiliateLinks_app_router.get('/eight-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-eight');
})


// https://opom.ca/ral/nine
affiliateLinks_app_router.get('/nine', (req,res)=>{
  return res.redirect('https://shareasale.com/r.cfm?b=2162525&u=3912076&m=106166&urllink=&afftrack=');
})

// https://opom.ca/ral/nine-fe
affiliateLinks_app_router.get('/nine-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-nine');
})


// https://opom.ca/ral/ten
affiliateLinks_app_router.get('/ten', (req,res)=>{
  return res.redirect('https://shareasale.com/r.cfm?b=2037251&u=3912076&m=106166&urllink=&afftrack=');
})


// https://opom.ca/ral/ten-fe
affiliateLinks_app_router.get('/ten-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-ten');
})




// https://opom.ca/ral/eleven
affiliateLinks_app_router.get('/eleven', (req,res)=>{
  return res.redirect('https://shareasale.com/r.cfm?b=2041034&u=3912076&m=106166&urllink=&afftrack=');
})

// https://opom.ca/ral/eleven-fe
affiliateLinks_app_router.get('/eleven-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-eleven');
})





// https://opom.ca/ral/twelve
affiliateLinks_app_router.get('/twelve', (req,res)=>{
  return res.redirect('https://www.weareplufl.com?snowball=ZOUHIR68705');
})



// https://opom.ca/ral/twelve-fe
affiliateLinks_app_router.get('/twelve-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-twelve');
})


// https://opom.ca/ral/thirteen
affiliateLinks_app_router.get('/thirteen', (req,res)=>{
  return res.redirect('https://www.tabs.co/discount/LOVE276962');
})



// https://opom.ca/ral/thirteen-fe
affiliateLinks_app_router.get('/thirteen-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-thirteen');
})


// https://opom.ca/ral/fourteen
affiliateLinks_app_router.get('/fourteen', (req,res)=>{
  return res.redirect('https://snwbl.io/fore-fathers/ZOUHIR76371');
})



// https://opom.ca/ral/fourteen-fe
affiliateLinks_app_router.get('/fourteen-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-fourteen');
})


// https://opom.ca/ral/fifteen
affiliateLinks_app_router.get('/fifteen', (req,res)=>{
  return res.redirect('https://snwbl.io/frost-buddy/ZOUHIR89146');
})



// https://opom.ca/ral/fifteen-fe
affiliateLinks_app_router.get('/fifteen-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-fifteen');
})


// https://opom.ca/ral/sixteen
affiliateLinks_app_router.get('/sixteen', (req,res)=>{
  return res.redirect('https://www.crossnetgame.com/discount/ZOUHIR66216');
})



// https://opom.ca/ral/sixteen-fe
affiliateLinks_app_router.get('/sixteen-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-sixteen');
})





// https://opom.ca/ral/seventeen
affiliateLinks_app_router.get('/seventeen', (req,res)=>{
  return res.redirect('https://lvnta.com/lv_P9ZwSEWjA06JLHb56m?');
})



// https://opom.ca/ral/seventeen-fe
affiliateLinks_app_router.get('/seventeen-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-seventeen');
})



// https://opom.ca/ral/eighteen
affiliateLinks_app_router.get('/eighteen', (req,res)=>{
  return res.redirect('https://lvnta.com/lv_px6znD1hR3V2UrhjVg?url=https%3A%2F%2Famazon.com%2Fdp%2FB083G7F8PG');
})



// https://opom.ca/ral/eighteen-fe
affiliateLinks_app_router.get('/eighteen-fe', (req,res)=>{
  return res.render('redirects-fe/redirect-eighteen');
})


// https://opom.ca/ral/nineteen
affiliateLinks_app_router.get('/nineteen', (req,res)=>{
  return res.redirect('https://lvnta.com/lv_9e58erh5kYS34sxzuh?url=https%3A%2F%2Famazon.com%2Fdp%2FB0786TJC33');
})





// https://opom.ca/ral/twenty
affiliateLinks_app_router.get('/twenty', (req,res)=>{
  return res.redirect('https://lvnta.com/lv_wGEYz5pzttt9lTPrtr?url=https%3A%2F%2Famazon.com%2Fdp%2FB0BHLDQ2X1');
})





// https://opom.ca/ral/twenty-one
affiliateLinks_app_router.get('/twenty-one', (req,res)=>{
  return res.redirect('https://lvnta.com/lv_aHngiDY6dU26C0G4lt?url=https%3A%2F%2Famazon.com%2Fdp%2FB0CHX4FQXP');
})






// https://opom.ca/ral/twenty-two
affiliateLinks_app_router.get('/twenty-two', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fshiv_graphix%2Fdesign-2-outstanding-logo-in-24-hours%3Fcontext_referrer%3Dsearch_gigs_with_modalities_logo_maker_banner%26source%3Dtop-bar%26ref_ctx_id%3D6e62a540eca64563a944db87f206b843%26pckg_id%3D1%26pos%3D6%26context_type%3Dauto%26funnel%3D6e62a540eca64563a944db87f206b843%26seller_online%3Dtrue%26imp_id%3D73abb3b6-1347-45fa-8ce4-91f03f72da73');
})





// https://opom.ca/ral/twenty-three
affiliateLinks_app_router.get('/twenty-three', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fzunairaah%2Fdesign-a-modern-and-luxury-minimalist-logo%3Fcontext_referrer%3Dsearch_gigs_with_modalities_logo_maker_banner%26source%3Dtop-bar%26ref_ctx_id%3D77f6e4f734d84b978e12ffc7a364ffa5%26pckg_id%3D1%26pos%3D4%26ad_key%3D1c1dd910-c127-4288-8a59-590982732972%26context_type%3Dauto%26funnel%3D77f6e4f734d84b978e12ffc7a364ffa5%26seller_online%3Dtrue%26imp_id%3Dbbedbc09-200e-4336-acdc-39ef4361a7cc');
})





// https://opom.ca/ral/twenty-four
affiliateLinks_app_router.get('/twenty-four', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fellestudio%2Fcreate-a-timeless-logo-for-your-company%3Fcontext_referrer%3Dsearch_gigs_with_modalities_logo_maker_banner%26source%3Dtop-bar%26ref_ctx_id%3D77f6e4f734d84b978e12ffc7a364ffa5%26pckg_id%3D1%26pos%3D5%26context_type%3Dauto%26funnel%3D77f6e4f734d84b978e12ffc7a364ffa5%26imp_id%3D1c0096fb-9cbd-4bd5-97bf-215c8182b3e2');
})






// https://opom.ca/ral/twenty-five
affiliateLinks_app_router.get('/twenty-five', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fairasx%2Fdo-research-summarization-and-content-writing%3Fcontext_referrer%3Dsubcategory_listing%26source%3Dcategory_tree%26ref_ctx_id%3D8734d1e84bae42aca60d041b352ab2eb%26pckg_id%3D1%26pos%3D5%26context_type%3Drating%26funnel%3D8734d1e84bae42aca60d041b352ab2eb%26fiverr_choice%3Dtrue%26imp_id%3D35f7b035-0195-4ffd-8744-0ba616459f46');
})


// https://opom.ca/ral/twenty-six
affiliateLinks_app_router.get('/twenty-six', (req,res)=>{
  return res.redirect('https://lvnta.com/lv_BeM9z9Ba223ruVu4a8?url=https%3A%2F%2Famazon.com%2Fdp%2FB07RSC6C46');
})



// https://opom.ca/ral/twenty-seven
affiliateLinks_app_router.get('/twenty-seven', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fklevitt70%2Fpromote-your-etsy-shop%3Fcontext_referrer%3Dsearch_gigs_with_modalities%26source%3Dchoice_modalities_pricing%26ref_ctx_id%3D26069fa15b8b449aab17f0988daaa5f0%26fiverr_choice%3Dtrue%26pckg_id%3D1%26pos%3D3%26context_type%3Dauto%26funnel%3D26069fa15b8b449aab17f0988daaa5f0%26seller_online%3Dtrue%26imp_id%3Dcd867826-79f7-4970-8ca8-fc1942ee8e9e');
})





// https://opom.ca/ral/twenty-eight
affiliateLinks_app_router.get('/twenty-eight', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Flogo__classic%2Fcreate-unique-3d-business-logo-design%3Fcontext_referrer%3Dsubcategory_listing%26source%3Dcategory_tree%26ref_ctx_id%3D1a6a2ba039964905b8bbcfd4602693d8%26pckg_id%3D1%26pos%3D1%26ad_key%3D5f966739-df88-4262-a061-ed87a19bfb5e%26context_type%3Drating%26funnel%3D1a6a2ba039964905b8bbcfd4602693d8%26imp_id%3D8437fae4-c499-4cce-b864-28889f2aa073');
})


// https://opom.ca/ral/twenty-nine
affiliateLinks_app_router.get('/twenty-nine', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fnthamali85%2Fdesign-3-business-card-businesscard-in-24h%3Fcontext_referrer%3Dsubcategory_listing%26source%3Dcategory_tree%26ref_ctx_id%3Dd1dfb9c834c14249986cd67fec4a1cf2%26pckg_id%3D1%26pos%3D2%26ad_key%3Dbfd29654-ba13-43b1-8624-74ecbb55dec3%26context_type%3Drating%26funnel%3Dd1dfb9c834c14249986cd67fec4a1cf2%26imp_id%3Dfc40bd29-8771-4de8-b53e-d756edb301e6');
})


// https://opom.ca/ral/thirty
affiliateLinks_app_router.get('/thirty', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Fmrcbttgl%2Fdesign-modern-hand-lettering-for-for-any-use%3Fcontext_referrer%3Dsubcategory_listing%26source%3Dcategory_tree%26ref_ctx_id%3D2d294c38c5554d0d8019b5dfcb2b8e12%26pckg_id%3D1%26pos%3D5%26context_type%3Drating%26funnel%3D2d294c38c5554d0d8019b5dfcb2b8e12%26imp_id%3D857872b2-9980-461e-bf9f-e18af5bf3496');
})


// https://opom.ca/ral/thirty-one
affiliateLinks_app_router.get('/thirty-one', (req,res)=>{
  return res.redirect('https://go.fiverr.com/visit/?bta=955713&brand=fp&landingPage=https%3A%2F%2Fwww.fiverr.com%2Flucianolabate%2Fim-really-good-at-illustrations%3Fcontext_referrer%3Dsubcategory_listing%26source%3Dcategory_tree%26ref_ctx_id%3D667ae9e0fe8d481d9ec4cb58b6d1a09f%26pckg_id%3D1%26pos%3D1%26ad_key%3D5ce4364e-5917-44a5-a083-ad3acebc194d%26context_type%3Drating%26funnel%3D667ae9e0fe8d481d9ec4cb58b6d1a09f%26imp_id%3D4cf5c34a-af59-4d65-8c98-08611947b7af');
})



// https://opom.ca/ral/thirty-two
// affiliateLinks_app_router.get('/thirty-two', (req,res)=>{
//   return res.redirect('https://maps.app.goo.gl/NwijduDLYpAQkr1n6');
// })


// https://opom.ca/ral/thirty-two
// http://localhost:3004/ral/thirty-two
affiliateLinks_app_router.get('/thirty-two', middleware4.mid1, (req,res)=>{
  return res.render('temporal-micro-workers', { ...res.locals.index_page_data });
})




module.exports = affiliateLinks_app_router

