/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/MyClaims/MyClaims.jsx
 * @description React component that displays the list of submitted claims from FormData context.
 *              Each list item is a link to the EditClaim component for editing.
 * @version 1.1.4
 * @exports MyClaims
 * @updated 2025-03-26
 */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormDataContext } from '../../App';

export const MyClaims = () => {
  const { claims } = useContext(FormDataContext);

  return (
    <div>
      <h3>Submitted Claims:</h3>
      {claims.length > 0 ? (
        <ul>
          {claims.map((claim, index) => (
            <li key={index}>
              <Link to={`/edit-claim/${index}`}>
                Name: {claim.name}, Date: {claim.date}, Type: {claim.type}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No claims submitted.</p>
      )}
    </div>
  );
};
