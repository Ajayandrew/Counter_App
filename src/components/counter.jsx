import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    const reset = () => setCount(0);

    return (
        <div className="counter-container">
            <div className="counter-card">
                <h1 className="title"> ⏱ Counter App</h1>

                <div className="count-display">{count}</div>

                {/* Progress Bar */}

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${count > 100 ? 100 : count}%` }}
                    ></div>
                </div>

                {/* Conditional Rendering Message */}

                {count === 0 ? (
                    <p className="message danger"> ⚠ Minimum limit reached</p>
                ) : count >=90 ? (
                    <p className="message success">🔥 Wow! High Count Level</p>
                ) : (
                    <p className="message normal">✅ Keep Going...</p>
                )}

                <div className="btn-group">
                    <button className="btn increment" onClick={increment}>
                        ➕ Increment
                    </button>

                    <button
                        className="btn decrement"
                        onClick={decrement}
                        disabled={count === 0}
                    >
                        ➖ Decrement
                    </button>

                    <button className="btn reset" onClick={reset}>
                        🔄 Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
