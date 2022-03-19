const storeProducts = [
    {
      id: 1,
      title: "samsung s10",
      img: "img/samsung.jpg",
      company: "amazone",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 100,
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 2,
      title: "lg",
      img: "img/LG.jpg",
      company: "lg",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 600,
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 3,
      title: "Iphone 11",
      img: "img/iphone11.jpg",
      company: "aple",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 200,
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 4,
      title: "infinix hot7 pro",
      img: "img/infinix.jpg",
      company: "infix",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 200,
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 5,
      title: "iphone8 vodafone",
      img: "img/vodafone.jpg",
      company: "vodafone",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 200,
    },
    {
      id: 6,
      title: "blackberry z30",
      img: "img/blackberry.jpg",
      company: "blackberry",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 150,
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 7,
      title: "huawei p30 pro",
      img: "img/hwawei.jpg",
      company: "aple",
      info:
        "The Galaxy S10 takes the classic S series a giant leap further. It features a large curved-edge screen and puts vault-like security at your fingertips ",
      price: 250,
      inCart: false,
      count: 0,
      total: 0,
    },
  ];
  function product(data){
    return`<div class="col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div class="card">
        <div class="img-container p-5">
            <a href="">
              <img src=${data.img} alt="" class="card-img-top" />
            </a>
            <button class="cart-btn">
             <p class="text-capitalize mb-0" >
                   add to cart
                </p>
               
            </button>
          </div>
       <div class=" card-footer d-flex justify-content-between">
        <p id="product-title" class="align-self-center mb-0">${data.title}</p>
        <h5 id="price" class="text-blue font-italic mb-0">${data.price}
           <span class="mr-1">cfa</span>
        </h5>
      </div>
    </div>
    </div>`
    }
    product(storeProducts);
    let allProducts = storeProducts.map(product);
    document.querySelector("#all-products").innerHTML = allProducts;
    console.log(allProducts)


let cheapProducts=storeProducts.filter(
      function (value){
        
        console.log(value)
        console.log(value.price)
        return value.price <250

        
      }
    )
    console.log(cheapProducts)


let numbers =[-23,-20,-17,-12,-5,0,1,5,12,19,20]
    let positiveNumbers = numbers.filter(
      function (value){
        console.log(0) 

        return(value>=0)
      }
    )
    const sum= positiveNumbers.reduce(function(result,item){
      return result + item;
    },0)
    console.log(sum)
      
 