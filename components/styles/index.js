import styled from "styled-components";
import { Row } from "react-bootstrap";

export const device = {
    sm: `@media (min-width: 575.98px)`,
    md: `@media (min-width: 767.98px)`,
    lg: `@media (min-width: 991.98px)`,
    xl: `@media (min-width: 1199.98px)`,
};

export const DividerRow = styled(Row)`
    border-bottom: 1px solid dimgrey;
    -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
        0 11px 15px -7px rgba(0, 0, 0, 0.2);
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
        0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;
