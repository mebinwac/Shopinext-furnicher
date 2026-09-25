/* =========================================================
   Shopynext — shared catalogue + UI behaviour
   ========================================================= */

/* ---------- catalogue ---------- */
const PRODUCTS = [
  {id:'avalon-3-seater-velvet-sofa',   img:'images/product/sofa-avalon.jpg',        name:'Avalon 3-Seater Velvet Sofa – Forest Green',        price:54999, was:64999, cta:'view',   cat:'Sofas',      brand:'Shopynext Studio', stock:'in'},
  {id:'nordic-upholstered-queen-bed',  img:'images/product/bed-nordic.jpg',         name:'Nordic Upholstered Queen Bed Frame with Headboard',     price:38499,            cta:'view',   cat:'Beds',       brand:'Nordic Home',      stock:'in'},
  {id:'marlow-sheesham-dining-table',  img:'images/product/dining-marlow.jpg',      name:'Marlow Solid Sheesham Dining Table – 6 Seater',     price:62000,            cta:'notify', cat:'Dining Sets', brand:'Marlow & Co',     stock:'out'},
  {id:'kori-accent-armchair',          img:'images/product/armchair-kori.jpg',      name:'Kori Accent Armchair – Slate Blue Linen',           price:18750,            cta:'cart',   cat:'Chairs',     brand:'Kori',             stock:'in'},
  {id:'halden-live-edge-coffee-table', img:'images/product/coffee-table-halden.jpg',name:'Halden Live-Edge Coffee Table – Walnut',            price:14750,            cta:'cart',   cat:'Tables',     brand:'Halden',           stock:'in'},
  {id:'luna-arc-floor-lamp',           img:'images/product/lamp-luna.jpg',          name:'Luna Arc Floor Lamp – Matte Black',                 price:9299,             cta:'cart',   cat:'Lighting',   brand:'Luna',             stock:'in'},
  {id:'hale-bedside-table',            img:'images/product/nightstand-hale.jpg',    name:'Hale Bedside Table with Drawer – Teal',             price:11450,            cta:'cart',   cat:'Storage',    brand:'Hale',             stock:'in'},
  {id:'terra-oak-bookshelf',           img:'images/product/bookshelf-terra.jpg',    name:'Terra Oak Bookshelf – 5 Tier Open Back',            price:21500,            cta:'cart',   cat:'Storage',    brand:'Terra',            stock:'in'},
  {id:'copenhagen-counter-stool',      img:'images/product/stool-eames.jpg',        name:'Copenhagen Counter Stool – Matte Black',            price:6499,             cta:'cart',   cat:'Chairs',     brand:'Copenhagen',       stock:'in'},
  {id:'sienna-brass-vase-set',         img:'images/product/vase-sienna.jpg',        name:'Sienna Hammered Brass Vase – Set of 2',             price:3499,             cta:'cart',   cat:'Decor',      brand:'Sienna',           stock:'in'},
  {id:'orion-velvet-loveseat',         img:'images/product/loveseat-orion.jpg',     name:'Orion Velvet 2-Seater Loveseat – Rust',             price:41200,            cta:'view',   cat:'Sofas',      brand:'Shopynext Studio', stock:'in'},
  {id:'ergo-pro-office-chair',         img:'images/product/office-chair-ergo.jpg',  name:'Ergo Pro High-Back Office Chair – Cobalt',          price:16999,            cta:'cart',   cat:'Home Office',brand:'Ergo',             stock:'in'},
  {id:'cloud-memory-foam-mattress',    img:'images/product/mattress-cloud.jpg',     name:'Cloud Memory Foam Mattress – Queen, 8 Inch',        price:24999, was:29999, cta:'cart',   cat:'Mattresses', brand:'Cloud',            stock:'in'},
  {id:'lumen-sliding-wardrobe',        img:'images/product/wardrobe-lumen.jpg',     name:'Lumen 3-Door Sliding Wardrobe with Mirror',             price:89000,            cta:'notify', cat:'Wardrobes',  brand:'Lumen',            stock:'out'},
  {id:'linnea-fabric-sofa',            img:'images/product/sofa-linnea.jpg',        name:'Linnea 3-Seater Fabric Sofa – Pebble Grey',         price:47500,            cta:'view',   cat:'Sofas',      brand:'Linnea',           stock:'in'},
  {id:'nova-sideboard-cabinet',        img:'images/product/sideboard-nova.jpg',     name:'Nova Sideboard Cabinet – Teal Lacquer',             price:34800,            cta:'cart',   cat:'Storage',    brand:'Nova',             stock:'in'},
  {id:'noor-dining-chair-set',         img:'images/product/dining-chair-noor.jpg',  name:'Noor Upholstered Dining Chair – Set of 2',          price:8990,             cta:'cart',   cat:'Chairs',     brand:'Noor',             stock:'in'},
  {id:'aria-tv-console',               img:'images/product/tv-console-aria.jpg',    name:'Aria Wall-Mount TV Console – White Oak',            price:27999,            cta:'cart',   cat:'TV Units',   brand:'Aria',             stock:'in'},
  {id:'kasbah-wool-rug',               img:'images/product/rug-kasbah.jpg',         name:'Kasbah Hand-Knotted Wool Rug – 6 x 9 ft',           price:19800,            cta:'cart',   cat:'Decor',      brand:'Kasbah',           stock:'in'},
  {id:'pine-step-stool',               img:'images/product/stool-pine.jpg',         name:'Pine Round Step Stool – Natural',                   price:2999,             cta:'cart',   cat:'Chairs',     brand:'Shopynext Studio', stock:'in'}
];

/* ---------- per-category detail content ----------
   Keeps the demo coherent: a mattress never offers "3 Seater". */
const SWATCH = {
  green:'images/gallery/swatch-green.jpg', rust:'images/gallery/swatch-rust.jpg',
  pebble:'images/gallery/swatch-pebble.jpg', slate:'images/gallery/swatch-slate.jpg'
};
const COLOUR_ROW = {
  label:'Colour', type:'swatch',
  values:[{v:'Forest Green',img:SWATCH.green},{v:'Rust',img:SWATCH.rust},
          {v:'Pebble Grey',img:SWATCH.pebble},{v:'Slate Blue',img:SWATCH.slate}]
};

const PROFILES = {
  Sofas:{
    options:[COLOUR_ROW,
      {label:'Fabric', values:['Velvet','Linen Blend','Bouclé'], off:['Bouclé']},
      {label:'Size', values:['2 Seater','3 Seater','4 Seater'], pick:'3 Seater'}],
    highlights:[['Upholstery','Cotton-blend velvet'],['Frame','Kiln-dried solid hardwood'],
      ['Seating Capacity','3 Seater'],['Assembly','Free expert assembly']],
    dims:[['Width','212 cm'],['Depth','88 cm'],['Height','82 cm'],['Seat Height','45 cm'],['Product Weight','46 kg']],
    materials:[['Upholstery','Cotton-blend velvet, 42,000 rub count'],['Frame Material','Kiln-dried solid hardwood'],
      ['Leg Material','Solid beech, walnut stain'],['Finish','Matte lacquer']],
    comfort:[['Seat Filling','High-resilience foam with fibre wrap'],['Back Filling','Feather-blend fibre'],
      ['Firmness','Medium-firm'],['Reversible Cushions','Yes']]
  },
  Beds:{
    options:[COLOUR_ROW,
      {label:'Headboard', values:['Plain','Channel Tufted','Diamond Tufted'], pick:'Channel Tufted'},
      {label:'Size', values:['Queen','King'], pick:'Queen'}],
    highlights:[['Upholstery','Textured polyester weave'],['Frame','Engineered wood with solid legs'],
      ['Storage','Hydraulic lift available'],['Assembly','Free expert assembly']],
    dims:[['Width','168 cm'],['Length','206 cm'],['Headboard Height','120 cm'],['Under-Bed Clearance','22 cm'],['Product Weight','62 kg']],
    materials:[['Upholstery','Polyester weave, stain resistant'],['Frame Material','Engineered wood'],
      ['Leg Material','Solid rubberwood'],['Slats','18 pine slats']],
    comfort:[['Mattress Support','Sprung slat base'],['Recommended Mattress','15–25 cm'],
      ['Headboard Padding','High-density foam'],['Noise','Anti-squeak fittings']]
  },
  Mattresses:{
    options:[{label:'Firmness', values:['Soft','Medium','Firm'], pick:'Medium'},
      {label:'Thickness', values:['6 Inch','8 Inch','10 Inch'], pick:'8 Inch'},
      {label:'Size', values:['Single','Double','Queen','King'], pick:'Queen'}],
    highlights:[['Comfort Layer','Gel-infused memory foam'],['Support Core','High-density PU foam'],
      ['Cover','Removable knitted cover'],['Trial','100-night home trial']],
    dims:[['Width','152 cm'],['Length','198 cm'],['Thickness','20 cm'],['Product Weight','24 kg']],
    materials:[['Comfort Layer','Gel-infused memory foam, 4 cm'],['Support Core','32-density PU foam'],
      ['Cover','Knitted polyester, removable'],['Certification','CertiPUR foam']],
    comfort:[['Firmness','Medium (6/10)'],['Motion Isolation','High'],
      ['Breathability','Open-cell, gel infused'],['Flippable','No']]
  },
  Chairs:{
    options:[COLOUR_ROW,
      {label:'Upholstery', values:['Linen','Velvet','Leatherette'], pick:'Linen'},
      {label:'Pack', values:['Single','Set of 2'], pick:'Single'}],
    highlights:[['Upholstery','Linen-blend weave'],['Frame','Solid beech'],
      ['Max Load','120 kg'],['Assembly','Legs attach in minutes']],
    dims:[['Width','68 cm'],['Depth','72 cm'],['Height','78 cm'],['Seat Height','45 cm'],['Product Weight','9 kg']],
    materials:[['Upholstery','Linen-blend weave'],['Frame Material','Solid beech'],
      ['Leg Finish','Natural oil'],['Feet','Felt-tipped']],
    comfort:[['Seat Filling','Moulded foam'],['Back Support','Contoured'],
      ['Firmness','Medium'],['Swivel','No']]
  },
  'Dining Sets':{
    options:[{label:'Finish', values:['Honey','Walnut','Natural'], pick:'Honey'},
      {label:'Top', values:['Solid Wood','Marble','Glass'], off:['Marble'], pick:'Solid Wood'},
      {label:'Seats', values:['4 Seater','6 Seater','8 Seater'], pick:'6 Seater'}],
    highlights:[['Table Material','Solid sheesham'],['Chairs Included','6'],
      ['Finish','Hand-rubbed matte'],['Assembly','Free expert assembly']],
    dims:[['Table Width','180 cm'],['Table Depth','90 cm'],['Table Height','76 cm'],
      ['Chair Height','96 cm'],['Product Weight','78 kg']],
    materials:[['Table Top','Solid sheesham, 25 mm'],['Legs','Solid sheesham'],
      ['Chair Upholstery','Performance fabric'],['Finish','Matte PU, hand rubbed']],
    comfort:[['Seat Filling','High-density foam'],['Legroom','74 cm'],
      ['Table Extends','No'],['Felt Pads','Included']]
  },
  Storage:{
    options:[{label:'Finish', values:['White Oak','Walnut','Charcoal'], pick:'White Oak'},
      {label:'Configuration', values:['Open Shelving','With Doors','With Drawers'], pick:'Open Shelving'}],
    highlights:[['Carcass','Engineered wood with solid trim'],['Shelves','Adjustable, 18 kg each'],
      ['Finish','Low-sheen lacquer'],['Assembly','Free expert assembly']],
    dims:[['Width','140 cm'],['Depth','40 cm'],['Height','182 cm'],['Shelf Count','5'],['Product Weight','38 kg']],
    materials:[['Carcass','Engineered wood, 18 mm'],['Trim','Solid oak'],
      ['Finish','Low-sheen lacquer'],['Back Panel','HDF, 6 mm']],
    comfort:[['Adjustable Shelves','Yes'],['Load per Shelf','18 kg'],
      ['Cable Management','Rear cut-out'],['Wall Anchor','Included']]
  },
  Wardrobes:{
    options:[{label:'Finish', values:['Champagne','White Oak','Graphite'], pick:'Champagne'},
      {label:'Doors', values:['2 Door','3 Door','4 Door'], pick:'3 Door'},
      {label:'Mirror', values:['With Mirror','No Mirror'], pick:'With Mirror'}],
    highlights:[['Carcass','Engineered wood'],['Doors','Soft-close sliding'],
      ['Interior','Rail, shelves and drawers'],['Assembly','Free expert assembly']],
    dims:[['Width','240 cm'],['Depth','62 cm'],['Height','218 cm'],['Product Weight','176 kg']],
    materials:[['Carcass','Engineered wood, 18 mm'],['Door Front','Lacquered MDF with mirror'],
      ['Track','Aluminium, soft-close'],['Back Panel','HDF, 6 mm']],
    comfort:[['Hanging Rail','2 rails, 180 cm'],['Drawers','4 soft-close'],
      ['Interior Light','Motion sensor'],['Wall Anchor','Included']]
  },
  Lighting:{
    options:[{label:'Finish', values:['Matte Black','Brass','Ivory'], pick:'Matte Black'},
      {label:'Bulb', values:['Warm White','Neutral','Not Included'], pick:'Warm White'}],
    highlights:[['Shade','Powder-coated steel'],['Base','Weighted marble'],
      ['Bulb Type','E27, max 12 W LED'],['Cable','2.4 m braided']],
    dims:[['Height','182 cm'],['Reach','98 cm'],['Base Diameter','28 cm'],['Product Weight','11 kg']],
    materials:[['Shade','Powder-coated steel'],['Arm','Brushed steel'],
      ['Base','Honed marble'],['Cable','Braided textile']],
    comfort:[['Dimmable','Yes, with compatible bulb'],['Switch','Inline foot switch'],
      ['Colour Temperature','2700 K'],['Rating','Indoor, IP20']]
  },
  Decor:{
    options:[{label:'Finish', values:['Brass','Antique','Matte'], pick:'Brass'},
      {label:'Pack', values:['Single','Set of 2'], pick:'Set of 2'}],
    highlights:[['Material','Hammered brass'],['Finish','Hand-polished'],
      ['Watertight','Yes, sealed interior'],['Care','Dry cloth only']],
    dims:[['Tall Vase Height','34 cm'],['Short Vase Height','24 cm'],['Base Diameter','14 cm'],['Set Weight','2.6 kg']],
    materials:[['Body','Hammered brass'],['Interior','Sealed lacquer'],
      ['Finish','Hand-polished'],['Origin','Moradabad, India']],
    comfort:[['Watertight','Yes'],['Dishwasher Safe','No'],
      ['Handmade','Yes — small variations expected'],['Care','Dry cloth only']]
  },
  'TV Units':{
    options:[{label:'Finish', values:['White Oak','Walnut','Charcoal'], pick:'White Oak'},
      {label:'Width', values:['140 cm','180 cm','220 cm'], pick:'180 cm'},
      {label:'Mounting', values:['Wall Mounted','Floor Standing'], pick:'Wall Mounted'}],
    highlights:[['Carcass','Engineered wood'],['Screen Support','Up to 75 inch'],
      ['Cable Management','Rear channel'],['Assembly','Free expert assembly']],
    dims:[['Width','180 cm'],['Depth','38 cm'],['Height','42 cm'],['Product Weight','44 kg']],
    materials:[['Carcass','Engineered wood, 18 mm'],['Front','Matte lacquer'],
      ['Handles','Push-to-open'],['Back Panel','HDF with cut-outs']],
    comfort:[['Soft-Close','Yes'],['Max Screen','75 inch'],
      ['Load Capacity','60 kg'],['Wall Anchor','Included']]
  },
  'Home Office':{
    options:[{label:'Colour', values:['Cobalt','Graphite','Sand'], pick:'Cobalt'},
      {label:'Armrests', values:['Fixed','3D Adjustable'], pick:'3D Adjustable'},
      {label:'Base', values:['Nylon','Polished Aluminium'], pick:'Nylon'}],
    highlights:[['Backrest','High-back with lumbar support'],['Recline','Multi-lock, 125°'],
      ['Max Load','130 kg'],['Warranty','5 years on mechanism']],
    dims:[['Width','68 cm'],['Depth','70 cm'],['Height','118–128 cm'],
      ['Seat Height','46–56 cm'],['Product Weight','17 kg']],
    materials:[['Upholstery','Breathable mesh'],['Frame','Reinforced nylon'],
      ['Base','Nylon, 5-star'],['Castors','PU, floor safe']],
    comfort:[['Lumbar Support','Adjustable'],['Recline','125° multi-lock'],
      ['Seat Depth','Adjustable'],['Headrest','Included']]
  },
  Tables:{
    options:[{label:'Finish', values:['Walnut','Oak','Black'], pick:'Walnut'},
      {label:'Legs', values:['Hairpin','Tapered','Box'], pick:'Hairpin'}],
    highlights:[['Top','Live-edge solid walnut'],['Legs','Powder-coated steel'],
      ['Finish','Natural hard-wax oil'],['Assembly','Legs attach in minutes']],
    dims:[['Width','120 cm'],['Depth','62 cm'],['Height','42 cm'],['Product Weight','26 kg']],
    materials:[['Top','Solid walnut, 40 mm'],['Legs','Powder-coated steel'],
      ['Finish','Hard-wax oil'],['Feet','Felt-tipped']],
    comfort:[['Live Edge','Yes — each piece differs'],['Heat Resistant','Use coasters'],
      ['Re-oiling','Every 12 months'],['Felt Pads','Included']]
  }
};
function profile(p){ return PROFILES[p.cat] || PROFILES.Sofas; }

/* galleries: only the hero product is photographed from several angles */
const GALLERIES = {
  'avalon-3-seater-velvet-sofa':[
    ['images/gallery/avalon-1.jpg','Avalon sofa, front view'],
    ['images/gallery/avalon-2.jpg','Avalon sofa, seat and cushion detail'],
    ['images/gallery/avalon-3.jpg','Velvet upholstery and piping detail'],
    ['images/gallery/avalon-4.jpg','Avalon sofa styled in a living room'],
    ['images/gallery/avalon-5.jpg','Avalon sofa, three-quarter view'],
    ['images/gallery/avalon-6.jpg','Available upholstery swatches']
  ]
};

const CTA = {view:'View Product', cart:'Add to Cart', notify:'Notify Me'};

const ICON_COMPARE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg>';
const ICON_EYE     = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.6"/></svg>';
const ICON_HEART   = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z"/></svg>';

/* ---------- helpers ---------- */
function inr(n){ return '₹' + n.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2}); }
function href(p){ return 'product.html?id=' + p.id; }

/* ---------- product card ----------
   `boxed` renders the bordered variant used on the listing page. */
function card(p, boxed){
  return '<article class="product' + (boxed ? ' product--boxed' : '') + '">'
    + '<a class="product-media" href="' + href(p) + '">'
    +   '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" />'
    + '</a>'
    + '<button class="wish" aria-label="Add to wishlist">' + ICON_HEART + '</button>'
    + '<div class="product-body">'
    +   '<h3><a href="' + href(p) + '">' + p.name + '</a></h3>'
    +   '<div class="price"><b>' + inr(p.price) + '</b>' + (p.was ? '<s>' + inr(p.was) + '</s>' : '') + '</div>'
    +   '<div class="product-actions">'
    +     '<a class="btn-primary" href="' + href(p) + '">' + CTA[p.cta] + '</a>'
    +     '<button class="icon-btn" aria-label="Compare">' + ICON_COMPARE + '</button>'
    +     '<button class="icon-btn" aria-label="Quick view">' + ICON_EYE + '</button>'
    +   '</div>'
    + '</div>'
    + '</article>';
}
function fill(id, list, boxed){
  const el = document.getElementById(id);
  if(el) el.innerHTML = list.map(function(p){ return card(p, boxed); }).join('');
}

/* ---------- home page rails ---------- */
fill('newRail',    PRODUCTS.slice(0, 10));
fill('seasonRail', PRODUCTS.slice(8, 16).concat(PRODUCTS.slice(0, 2)));
fill('featRail',   [PRODUCTS[0],PRODUCTS[12],PRODUCTS[2],PRODUCTS[14],PRODUCTS[7],PRODUCTS[13],PRODUCTS[5],PRODUCTS[17],PRODUCTS[3],PRODUCTS[9]]);

/* ---------- horizontal rails ---------- */
document.querySelectorAll('.rail-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    const rail = document.getElementById(btn.dataset.rail);
    const first = rail && rail.firstElementChild;
    if(!first) return;
    const step = first.getBoundingClientRect().width + 16;
    rail.scrollBy({left: step * Number(btn.dataset.dir), behavior:'smooth'});
  });
});

/* ---------- hero carousel (home only) ---------- */
(function(){
  const track = document.getElementById('heroTrack');
  const dotsEl = document.getElementById('heroDots');
  if(!track || !dotsEl) return;
  const count = track.children.length;
  let i = 0, timer;

  for(let n = 0; n < count; n++){
    const d = document.createElement('button');
    d.setAttribute('aria-label', 'Go to slide ' + (n + 1));
    d.dataset.index = n;
    dotsEl.appendChild(d);
  }
  const dots = dotsEl.children;

  function go(n){
    i = (n + count) % count;
    track.style.transform = 'translateX(-' + (i * 100) + '%)';
    for(let k = 0; k < dots.length; k++){ dots[k].setAttribute('aria-current', k === i ? 'true' : 'false'); }
  }
  function start(){ stop(); timer = setInterval(function(){ go(i + 1); }, 5000); }
  function stop(){ if(timer) clearInterval(timer); }

  dotsEl.addEventListener('click', function(e){
    const b = e.target.closest('button'); if(!b) return;
    go(Number(b.dataset.index)); start();
  });
  const hero = document.getElementById('hero');
  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);

  go(0); start();
})();

/* ---------- mobile drawer ---------- */
(function(){
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  const burger = document.getElementById('burger');
  if(!drawer || !backdrop || !burger) return;
  function open(){ drawer.classList.add('open'); backdrop.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close(){ drawer.classList.remove('open'); backdrop.classList.remove('open'); document.body.style.overflow = ''; }
  burger.addEventListener('click', open);
  document.getElementById('drawerClose').addEventListener('click', close);
  backdrop.addEventListener('click', close);
})();

/* ---------- accordions (filters + specifications) ---------- */
document.querySelectorAll('[data-accordion]').forEach(function(btn){
  btn.addEventListener('click', function(){
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    const panel = btn.nextElementSibling;
    if(panel) panel.hidden = open;
  });
});
