import { Router, Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import Knowledge from "../models/Knowledge";

const router = Router();

/**
 * USER: Submit knowledge (login required)
 */
router.post(
  "/",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      // ✅ TypeScript safety check
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const knowledge = await Knowledge.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        region: req.body.region,
        mediaUrl: req.body.mediaUrl,
        createdBy: req.user.id
      });

      res.status(201).json({
        message: "Knowledge submitted for review",
        knowledge
      });
    } catch (error) {
      res.status(500).json({
        message: "Error submitting knowledge"
      });
    }
  }
);

/**
 * ADMIN: Approve knowledge
 */
router.put(
  "/:id/approve",
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    const id = req.params.id;

    console.log("Approving ID:", id);

    const knowledge = await Knowledge.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    console.log("Updated document:", knowledge);

    res.json({ knowledge });
  }
);


/**
 * PUBLIC: Get approved knowledge
 */
/**
 * 🌍 PUBLIC: Get all approved knowledge
 * No login required
 */
router.get("/public", async (req, res) => {
  try {
    const knowledge = await Knowledge.find({ isApproved: true })
      .populate("createdBy", "name");

    res.json(knowledge);
  } catch (error) {
    res.status(500).json({ message: "Failed to load knowledge" });
  }
});
/**
 * 🌏 PUBLIC: Get approved knowledge by region
 */
router.get("/region/:region", async (req, res) => {
  try {
    const region = req.params.region;

    const knowledge = await Knowledge.find({
      region: { $regex: new RegExp(region, "i") }, // case-insensitive
      isApproved: true
    }).populate("createdBy", "name");

    res.json(knowledge);
  } catch (error) {
    res.status(500).json({ message: "Failed to load regional knowledge" });
  }
});
/**
 * 📚 PUBLIC: Get approved knowledge by category
 */
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;

    const knowledge = await Knowledge.find({
      category: { $regex: new RegExp(category, "i") }, // case-insensitive
      isApproved: true
    }).populate("createdBy", "name");

    res.json(knowledge);
  } catch (error) {
    res.status(500).json({ message: "Failed to load category knowledge" });
  }
});
// POST – Submit new knowledge (Pending approval)
router.post("/submit", async (req, res) => {
  try {
    const { title, description, category, region, author } = req.body;

    const newKnowledge = new Knowledge({
      title,
      description,
      category,
      region,
      author,
      status: "pending"
    });

    await newKnowledge.save();

    res.json({ message: "Knowledge submitted for approval 🌿" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit knowledge" });
  }
});

/**
 * 🛂 ADMIN: Get all pending knowledge (not approved)
 */
router.get(
  "/pending",
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    try {
      const pending = await Knowledge.find({ isApproved: false })
        .populate("createdBy", "name email");

      res.json(pending);
    } catch (error) {
      res.status(500).json({ message: "Failed to load pending knowledge" });
    }
  }
);
// 🛡️ Admin - get all pending knowledge
router.get("/admin/pending", async (req, res) => {
  try {
    const data = await Knowledge.find({ isApproved: false })
      .populate("createdBy", "name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to load pending knowledge" });
  }
});
// ✅ Admin - approve knowledge
router.put("/admin/approve/:id", async (req, res) => {
  try {
    const item = await Knowledge.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );

    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Approval failed" });
  }
});
// ---------------------------
// 🔐 ADMIN – PENDING KNOWLEDGE
// ---------------------------
router.get("/pending", async (req, res) => {
  try {
    const pending = await Knowledge.find({ status: "pending" }).sort({ createdAt: -1 });
    res.json(pending);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch pending knowledge" });
  }
});

// ---------------------------
// ✅ APPROVE
// ---------------------------
router.put("/approve/:id", async (req, res) => {
  try {
    await Knowledge.findByIdAndUpdate(req.params.id, {
      status: "approved",
    });
    res.json({ message: "Approved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Approval failed" });
  }
});

// ---------------------------
// ❌ REJECT
// ---------------------------
router.put("/reject/:id", async (req, res) => {
  try {
    await Knowledge.findByIdAndUpdate(req.params.id, {
      status: "rejected",
    });
    res.json({ message: "Rejected successfully" });
  } catch (err) {
    res.status(500).json({ error: "Rejection failed" });
  }
});





export default router;
