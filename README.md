# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Fetch Product Info

  *Fetch a single product's info based upon product id*

  ```js
  GET /api/product/:id
  ```
  **URL Parameters**

  - Required:
    - **id**: [ integer ]; id of product for which to fetch info

  **Data Parameters**
  - None

  **Success Response**
  - **Content:** 
    <pre>
    {
      id: <em>INTEGER</em> - [product id]
      name: <em>STRING</em> - [product name]
      price: <em>NUMBER</em> - [product price]
      quantity: <em>INTEGER</em> - [quantity of product available]
      isPrimeEligible: <em>BOOLEAN</em> - [eligibility of product for Prime shipping]
    }
    </pre>

****
### Fetch User Info

  *Fetch info about a user*

  ```js
  GET /api/users/:username
  ```
  **URL Parameters**

  - Required:     
    - **username**: [ string ]; username of user for which to fetch info

  **Data Parameters**
  - None

  **Success Response**
  - **Content:** 
    <pre>
    {
      shippingZipcode: <em>INTEGER</em> - [zipcode for shipping address]
      isPrimeMember: <em>BOOLEAN</em> - [status of Prime membership]
      cart: [
        <b>PRODUCT</b> - [product currently in cart for purchase]
      ]
      lists: [
        <b>LIST</b> - [list of products saved for future purchase]
      ]
    }
    </pre>
  
****
### Add Item to List

  *Add a product to a user's list*

  ```js
  POST /api/users/:username/:list
  ```
  **URL Parameters**

  - Required:     
    - **username**: [ string ]; username whose list will be altered
    - **list**: [ string ]; name of list to which item will be added

  **Data Parameters**
  
  - Required:     
    - **id**: [ integer ]; id of product to be added to the list
    - **name**: [ string ]; name of product to be added to the list
****
### Add Item to Cart

  *Add a product to the cart*

  ```js
  POST /api/users/:username/cart
  ```
  **URL Parameters**

  - Required:
    - **username**: [ string ]; username whose cart will be altered

  **Data Parameters**

  - Required:
    - **id**: [ integer ]; id of product to be added to the cart
    - **name**: [ string ]; name of product to be added to the cart
    - **quantity**: [ integer ]; quantity of product to be added to the cart
****
### Product Update

  *Update the available quantity of a product*
  ```js
  PUT /api/product/:id
  ```
  **URL Parameters**

  - Required:
    - **id**: [ integer ]; id of product whose quantity will be altered

  **Data Parameters**

  - Required:
    - **name**: [ string ]; name of product whose quantity will be altered
    - **quantity**: [ integer ]; number by which to change the quantity of product available
****



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

