const router = require("express").Router();
const AccessController = require("../controller/checkAccessController");
const verifyToken = require("../middleware/user");
//@Register
router.get("/", verifyToken, AccessController.checkAccess);

module.exports = router;
// định nghĩa một router trong Express để xử lý các yêu cầu liên quan đến việc kiểm tra quyền truy cập