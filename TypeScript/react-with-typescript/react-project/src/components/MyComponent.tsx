import React from "react";


interface MyComponentProps {
    name: string;
    age?: number;
} 

export default function MyComponent({ name, age } : MyComponentProps) {
    return (
        <div>
            {name} - {age}
        </div>
    );
}