import { CheckCircle2, Circle, Plus, Trash2, Filter } from "lucide-react";
import TodoFilters from "./TodoFilters";
import TodoForm from "./TodoForm";

function TodoApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo Flow</h1>
          <p>Organize your life, one task at a time.</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-300 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Progress Overview
            </h2>
            <div className="text-2xl font-bold text-green-600"></div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <div className="flex items-center justify-between mb-4">
              <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer">
                <Plus size={20} /> Add ToDo
              </button>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-3  hover:bg-red-50 text-red-600 hover:text-red-700 px-3 py-2 rounded-lg transition-colors duration-200 text-sm cursor-pointer">
                  <Trash2 size={16} /> Clear Completed
                </button>
                <button className="flex items-center gap-3  hover:bg-green-50 text-green-600 hover:text-green-700 px-3 py-2 rounded-lg transition-colors duration-200 text-sm cursor-pointer">
                  <CheckCircle2 size={16} /> Mark All Completed
                </button>
              </div>
            </div>
            <TodoFilters />
          </div>
          <div className="p-6 border-b border-gray-300 bg-gray-100">
            <TodoForm />
          </div>
          <div className="max-h-96 overflow-y-auto">
            <div className="p-12 text-center">
              <div className="text-gray-600">
                <Circle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2 text-gray-800">
                  No Todos Yet
                </p>
                <p>Add your first todo to get started!</p>
              </div>
              <div className="text-gray-600">
                <Filter size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2 text-gray-800">
                  No Filter Todos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-700">Footer</div>
      </div>
    </div>
  );
}
export default TodoApp;
