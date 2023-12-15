import styled from 'styled-components';


export const VerticalLine = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: #e1e1e1;
`;

export const CheckoutPageWrapper = styled.div`
  margin: 0 auto;
  min-height: 55vh;

  h2 {
    color: #333;
  }

  .form-group-first {
    margin-bottom: 15px;
    display: flex;
    flex-direction: row; /* Set flex direction to row */
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */

    label {
      display: block;
      margin-bottom: 15px;
    }

    input {
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 5px;
      margin-right: 10px;
      border: 1px solid #ccc; /* Add border for better visibility */
      border-radius: 4px; /* Add border-radius for rounded corners */
    }
}
  .form-group-column{
        margin-bottom: 15px;
        display: flex;
        flex-direction: row; /* Set flex direction to row */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
    
    label {
          display: block;
          margin-bottom: 15px;
    }
    
    input {
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 5px;
          margin-right: 10px;
          border: 1px solid #ccc; /* Add border for better visibility */
          border-radius: 4px; /* Add border-radius for rounded corners */
    }
}
  .form-group-wide{
    margin-bottom: 15px;
        display: flex;
        flex-direction: row; /* Set flex direction to row */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
    
    label {
          display: block;
          margin-bottom: 15px;/* Add some space between label and input */
    }
    
    input {
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 5px;
          border: 1px solid #ccc; /* Add border for better visibility */
          border-radius: 4px; /* Add border-radius for rounded corners */
    }
  }
}

  .form-buttons {
    margin-top: 55px;
    margin-bottom: 40px;

    button {
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        background-color: #333;
      }
    }
  }

`;
