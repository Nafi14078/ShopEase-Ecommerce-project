#  ShopEase

An E-commerce platform with Progressive Web App (PWA) functionalities, designed to offer a complete shopping experience for general users. Built with the MERN stack, ShopEase supports multi-user roles, authentication, and powerful admin controls.

---

##  Team Members

- **Sayad Ibna Azad** – `210041251`
- **Ashfak Azad Nafi** – `210041245`
- **Rashikh Ahmad** – `210041255`

---

##  Overview

**ShopEase** is a full-fledged e-commerce web application aimed at providing users with a smooth online shopping experience. The application includes essential functionalities such as authentication, product browsing, cart management, and order tracking. Admins are empowered with full control over products, categories, and user management.

---

##  Features

###  Authentication
- Admin and User registration & login
- Password reset functionality
- JWT-based session handling
- Separate dashboards for Admin and User

###  User Functionalities
- Browse products by title and category
- Filter products by category and price
- View product details with similar product recommendations
- Add products to cart and checkout
- Track orders via a dedicated order page

###  Admin Functionalities
- Full CRUD operations on products and categories
- View all registered users
- Monitor all orders placed

---

##  Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Framework:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  

---


##  Installation

```bash
# Clone the repository
https://github.com/Nafi14078/ShopEase-Ecommerce-project.git
cd shopease

# Install backend dependencies
cd shopease
npm install

# Install frontend dependencies
cd client
npm install

```

##  Setup Environment Variables

Create a **.env** file in the `shopease` directory and add the following:

```env
PORT = 5000
DEV_MODE=development
MONGO_URL=your mongo url
JWT_SECRET=your secret key
BRAINTREE_MERCHANT_ID=your id
BRAINTREE_PUBLIC_KEY=your public key
BRAINTREE_PRIVATE_KEY=your private key
```
Create a **.env** file in the `client` folder and add the following:

```env
REACT_APP_API_URL=your api
```


## Run the app

Open a terminal and go to the `shopease` directory and run the following command

```bash
npm run dev
```

## License

This project is for academic purposes under the Web Programming Lab (CSE 4539) at IUT.
