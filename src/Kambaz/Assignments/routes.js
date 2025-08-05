import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.get("/api/assignments", (req, res) => {
    res.json(dao.findAllAssignments());
  });

  app.get("/api/assignments/:id", (req, res) => {
    const assignment = dao.findAssignmentById(req.params.id);
    res.json(assignment);
  });

  app.put("/api/assignments/:id", (req, res) => {
    const updated = dao.updateAssignment(req.params.id, req.body);
    res.json(updated);
  });

  app.delete("/api/assignments/:id", (req, res) => {
    dao.deleteAssignment(req.params.id);
    res.sendStatus(200);
  });
}
