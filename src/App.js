import "./css/app.css";
import Home from "./components/homePage/home";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Productmore from "./components/ProductMore/Productmore";
import {ToastContainer} from "react-toastify";
import Orders from "./components/AdminPage/order/Orders";
import Statistics from "./components/AdminPage/system/Statistics";
import Client from "./components/CellerPage/Client";
import Market from "./components/CellerPage/Market";
import Products from "./components/AdminPage/product/products/Products";
import Comments from "./components/AdminPage/system/Comments";
import Returns from "./components/AdminPage/order/Returns";
import Settings from "./components/AdminPage/system/Settings";
import Buyurtmalar from "./components/CellerPage/Buyurtmalar";
import AdminMenu from "./components/AdminPage/AdminMenu";
import Category from "./components/AdminPage/Category/Category";
import Brand from "./components/AdminPage/product/Brand/Brand";
import Profile from "./components/homePage/Main/profile";
import Clients from "./components/AdminPage/Client/Clients";
import Model from "./components/AdminPage/product/model/Model";
import Detail from "./components/AdminPage/product/detail/Detail";
import Value from "./components/AdminPage/product/value/Value";
import Payments from "./components/AdminPage/payment/Payments";
import Currency from "./components/AdminPage/payment/Currency";
import PaymentSystem from "./components/AdminPage/payment/PaymentSystem";
import Country from "./components/AdminPage/addres/country/Country";
import District from "./components/AdminPage/addres/district/District";
import Region from "./components/AdminPage/addres/region/Region";
import Sellers from "./components/AdminPage/Client/Sellers";
import Role from "./components/AdminPage/system/role/Role";
import Blogs from "./components/AdminPage/system/Blogs";
import BuyNow from "./components/ProductMore/BuyNow";
import Login from "./components/AdminPage/Login";
import CategoryAdd from "./components/AdminPage/Category/CategoryAdd";
import CategoryEdit from "./components/AdminPage/Category/CategoryEdit";
import BrandAdd from "./components/AdminPage/product/Brand/BrandAdd";
import BrandEdit from "./components/AdminPage/product/Brand/BrandEdit";
import DetailAdd from "./components/AdminPage/product/detail/DetailAdd";
import DetailEdit from "./components/AdminPage/product/detail/DetailEdit";
import ValueAdd from "./components/AdminPage/product/value/ValueAdd";
import ValueEdit from "./components/AdminPage/product/value/ValueEdit";
import ModelAdd from "./components/AdminPage/product/model/ModelAdd";
import ModelEdit from "./components/AdminPage/product/model/ModelEdit";
import CountryAdd from "./components/AdminPage/addres/country/CountryAdd";
import CountryEdit from "./components/AdminPage/addres/country/CountryEdit";
import DistrictAdd from "./components/AdminPage/addres/district/DistrictAdd";
import DistrictEdit from "./components/AdminPage/addres/district/DistrictEdit";
import RegionAdd from "./components/AdminPage/addres/region/RegionAdd";
import RegionEdit from "./components/AdminPage/addres/region/RegionEdit";
import RoleAdd from "./components/AdminPage/system/role/RoleAdd";
import RoleEdit from "./components/AdminPage/system/role/RoleEdit";
import ShoppingCard from "./components/homePage/shoppingCard";
import CellerLayout from "./components/CellerPage/CellerLayout";
import ProductAdd from "./components/AdminPage/product/products/ProductAdd";
import NotFound from "./components/homePage/NotFound";


function App() {
  return (
      <div className="app">
          <Router>
              <Switch>
                  <Route path="/" exact  component={Home}/>

                  <Route path="/product/view/:url" exact component={Productmore}/>
                  <Route path="/home/shopping" exact component={ShoppingCard}/>
                  <Route path="/seller" component={CellerLayout}/>
                  <Route path="/product/buynow:id" exact component={BuyNow}/>
                  <Route path="/home/profile" component={Profile}/>

                  <Route path="/admin/login" exact component={Login}/>

                  <Route path="/admin/profile" exact component={AdminMenu}/>
                  <Route path="/admin/category" exact component={Category}/>
                  <Route path="/admin/category/add" exact component={CategoryAdd}/>
                  <Route path="/admin/category/edit" exact component={CategoryEdit}/>

                  {/*Product*/}
                  <Route path="/admin/product/brand" exact component={Brand}/>
                  <Route path="/admin/product/brand/add" exact component={BrandAdd}/>
                  <Route path="/admin/product/brand/edit" exact component={BrandEdit}/>
                  <Route path="/admin/product/model" exact component={Model}/>
                  <Route path="/admin/product/model/add" exact component={ModelAdd}/>
                  <Route path="/admin/product/model/edit" exact component={ModelEdit}/>
                  <Route path="/admin/product/products" exact component={Products}/>
                  <Route path="/admin/product/products/add" exact component={ProductAdd}/>
                  <Route path="/admin/product/detail" exact component={Detail}/>
                  <Route path="/admin/product/detail/add" exact component={DetailAdd}/>
                  <Route path="/admin/product/detail/edit" exact component={DetailEdit}/>
                  <Route path="/admin/product/value" exact component={Value}/>
                  <Route path="/admin/product/value/add" exact component={ValueAdd}/>
                  <Route path="/admin/product/value/edit" exact component={ValueEdit}/>


                  {/*Payment*/}
                  <Route path="/admin/payment/payments" exact component={Payments}/>
                  <Route path="/admin/payment/currency" exact component={Currency}/>
                  <Route path="/admin/payment/payment-system" exact component={PaymentSystem}/>

                  {/*Addres*/}
                  <Route path="/admin/addres/country" exact component={Country}/>
                  <Route path="/admin/addres/country/add" exact component={CountryAdd}/>
                  <Route path="/admin/addres/country/edit" exact component={CountryEdit}/>
                  <Route path="/admin/addres/region" exact component={Region}/>
                  <Route path="/admin/addres/region/add" exact component={RegionAdd}/>
                  <Route path="/admin/addres/region/edit" exact component={RegionEdit}/>
                  <Route path="/admin/addres/district" exact component={District}/>
                  <Route path="/admin/addres/district/add" exact component={DistrictAdd}/>
                  <Route path="/admin/addres/district/edit" exact component={DistrictEdit}/>

                  {/*Order*/}
                  <Route path="/admin/order/orders" exact component={Orders}/>
                  <Route path="/admin/order/returns" exact component={Returns}/>

                  {/*Clients*/}
                  <Route path="/admin/client/clients" exact component={Clients}/>
                  <Route path="/admin/client/sellers" exact component={Sellers}/>

                  {/*System*/}
                  <Route path="/admin/system/role" exact component={Role}/>
                  <Route path="/admin/system/role/add" exact component={RoleAdd}/>
                  <Route path="/admin/system/role/edit" exact component={RoleEdit}/>
                  <Route path="/admin/system/comments" exact component={Comments}/>
                  <Route path="/admin/system/blogs" exact component={Blogs}/>
                  <Route path="/admin/system/statistics" exact component={Statistics}/>
                  <Route path="/admin/system/settings" exact component={Settings}/>

                  <Route component={NotFound}/>

              </Switch>
          </Router>
          <ToastContainer/>
      </div>
  );
}

export default App;


// blog  comment ordrer return > order



