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
        <div></div>
      </div>
    </div>
  );
}
export default TodoApp;
