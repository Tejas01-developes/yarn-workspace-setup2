import bull from 'bull';
export const taskcontainer = new bull("task-container", "redis://127.0.0.1:6379");
//# sourceMappingURL=backgroundworker.js.map