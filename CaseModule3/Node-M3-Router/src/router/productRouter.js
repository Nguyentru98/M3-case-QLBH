import fs from 'fs'
import qs from "qs";
import productController from "../controller/productController.js";

let productRouter = {
    '/products': productController.showAll,
    '/add-product': productController.showFormAdd,
    '/edit-product': productController.showFormEdit,
    '/delete-product': productController.delete,
    '/search-product': productController.searchProduct,
}

export default productRouter;
