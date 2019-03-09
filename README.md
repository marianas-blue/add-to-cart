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
  GET /api/users/:userId
  ```
  **URL Parameters**

  - Required:     
    - **userId**: [ int ]; user ID of user for which to fetch info

  **Data Parameters**
  - None

  **Success Response**
  - **Content:** 
    <pre>
    {
      username: <em>STRING</em> - [username]
      isPrimeMember: <em>BOOLEAN</em> - [status of Prime membership]
    }
    </pre>
  
****
### Add Item to Cart

  *Add a product to a user's cart and update quantity of product available*

  ```js
  POST /api/cart
  ```
  **URL Parameters**
  - None

  **Data Parameters**
  
  - Required:
    - **userId**: [ integer ]; userID whose cart will be altered     
    - **productId**: [ integer ]; id of product to be added to the cart
    - **quantity**: [ integer ]; quantity of product to be added to the cart

****
### Fetch Cart Contents

  *Get the current contents of a user's cart*

  ```js
  GET /api/cart
  ```
  **URL Parameters**
  - None

  **Data Parameters**

  - Required:
    - **userId**: [ integer ]; userID whose cart will be fetched

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

