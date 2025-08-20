// MUNCHA25131_FTO2505_B_MunasheChakona_JSLPortfolioPiece/scripts.js
// This script initializes the task board, sets up event listeners,
import { getTasks } from "./taskData.js";
import { clearExistingTasks, renderTasks } from "./taskRender.js";
import { setupModalHandlers, openNewTaskModal } from "./taskModal.js";
import { showLoading, hideLoading } from "./loading.js";
import { setupThemeToggle } from "./themeToggle.js";
import { setupSidebarToggle } from "./sidebarToggle.js";

// Initialize and render tasks, set up modal and new task button
async function initTaskBoard() {
  showLoading();
// Fetch tasks from the data source
  // This function retrieves tasks and renders them in the UI
  const tasks = await getTasks();

  clearExistingTasks();
  renderTasks(tasks);

  hideLoading();
// Set up modal handlers for task editing and creation
  // This function binds click events to task elements and the new task button
  setupModalHandlers();
// Set up the new task button to open the modal for creating a new task
  // This function initializes the button that allows users to add new tasks
  const addNewTaskBtn = document.getElementById("add-new-task-btn");
  if (addNewTaskBtn) {
    addNewTaskBtn.addEventListener("click", openNewTaskModal);
  }
}

// Run on DOM ready: initialize task board, theme, and sidebar toggles
document.addEventListener("DOMContentLoaded", () => {
  initTaskBoard();
  setupThemeToggle();
  setupSidebarToggle();
});
