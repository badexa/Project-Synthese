const productModel = require('../../models/productModel');

async function deleteProductController(req, res) {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required",
                error: true,
                success: false
            });
        }

        await productModel.findByIdAndDelete(productId);

        return res.status(200).json({
            message: "Product deleted successfully",
            error: false,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

module.exports = deleteProductController;
