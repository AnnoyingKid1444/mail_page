import React from 'react';
import '../styles/TableGrade.css';
import res from './gradesTest';

export default function TableGrades() {
    return (
        <table className="TableGrades">
            <thead className="tableHead">
                <tr>
                    <th>Year</th>
                    <th>Subject</th>
                    <th>Credit</th>
                    <th>Score</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {res}
            </tbody>
        </table>

    )
}