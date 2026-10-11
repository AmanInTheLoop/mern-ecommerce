const express = require("express");

const {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");
const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", getBrands);
router.get("/:id", getBrandById);
router.post("/", protect, admin, createBrand);

router.put("/:id", protect, admin, updateBrand);

router.delete("/:id", protect, admin, deleteBrand);

module.exports = router;
