"use client";

import { useState } from "react";
import { TodoDone } from "../ui/tododone";

export interface Todo {
    id: string;
    label: string;
    done: boolean;
}

interface DailyTodosProps {
    initialTodos: Todo[];
}

export const DailyTodos = ({ initialTodos }: DailyTodosProps) => {
    const [todos, setTodos] = useState(initialTodos);

    const handleToggle = (todoId: string, checked: boolean) => {
        // Replace with API call when backend is ready
        setTodos((prev) =>
            prev.map((t) => (t.id === todoId ? { ...t, done: checked } : t))
        );
    };

    return (
        <div className="space-y-1  lg:w-1/2 w-full">
            {todos.map((todo) => (
                <TodoDone
                    key={todo.id}
                    todoId={todo.id}
                    label={todo.label}
                    checked={todo.done}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
};

// Skeleton for Suspense
export const DailyTodosSkeleton = () => {
    return (
        <div className="space-y-1 w-1/2">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-cream animate-pulse"
                >
                    <div className="w-6 h-6 rounded-full bg-dark/10" />
                    <div className="h-4 bg-dark/10 rounded w-24" />
                </div>
            ))}
        </div>
    );
};
