// File: declarations.d.ts

declare module "mdb-react-ui-kit" {
    import React, { HTMLAttributes } from "react";

    interface MDBContainerProps extends HTMLAttributes<HTMLDivElement> {
        fluid?: boolean;
        // Add any specific props used by MDBContainer
    }

    export const MDBContainer: React.FC<MDBContainerProps>;

    interface MDBRowProps extends HTMLAttributes<HTMLDivElement> {
        // Add any specific props used by MDBRow
    }

    export const MDBRow: React.FC<MDBRowProps>;

    interface MDBColProps extends HTMLAttributes<HTMLDivElement> {
        md?: string;
        lg?: string;
        xl?: string;
        className?: string;
        // Add any specific props used by MDBCol
    }

    export const MDBCol: React.FC<MDBColProps>;

    interface MDBCardProps extends HTMLAttributes<HTMLDivElement> {
        className?: string;
        // Add any specific props used by MDBCard
    }

    export const MDBCard: React.FC<MDBCardProps>;

    interface MDBCardBodyProps extends HTMLAttributes<HTMLDivElement> {
        // Add any specific props used by MDBCardBody
    }

    export const MDBCardBody: React.FC<MDBCardBodyProps>;

    interface MDBIconProps extends HTMLAttributes<HTMLSpanElement> {
        icon: string;
        fas?: boolean;
        far?: boolean;
        // Add any specific props used by MDBIcon
    }

    export const MDBIcon: React.FC<MDBIconProps>;

    interface MDBBtnProps extends HTMLAttributes<HTMLButtonElement> {
        color?: string;
        size?: string;
        rounded?: boolean;
        // Add any specific props used by MDBBtn
    }

    export const MDBBtn: React.FC<MDBBtnProps>;

    interface MDBTypographyProps extends HTMLAttributes<HTMLUListElement> {
        listUnStyled?: boolean;
        // Add any specific props used by MDBTypography
    }

    export const MDBTypography: React.FC<MDBTypographyProps>;

    interface MDBTextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
        label?: string;
        id?: string;
        rows?: number;
        // Add any specific props used by MDBTextArea
    }

    export const MDBTextArea: React.FC<MDBTextAreaProps>;

    interface MDBCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
        // Add any specific props used by MDBCardHeader
    }

    export const MDBCardHeader: React.FC<MDBCardHeaderProps>;
}
