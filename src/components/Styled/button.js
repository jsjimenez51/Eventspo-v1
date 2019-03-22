import styled from 'styled-components';

export default styled.button`
    background: #AD974F;
    color: white;
    border-radius: 7px;
    padding: 10px;
    margin: 10px;
    font-size: 16px;

    :disabled {
        opacity: 0.4;
    }

    :hover {
        box-shadow: 0 0 10px gold;
    }
`;