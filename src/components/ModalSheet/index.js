import React from 'react';
import { Sheet, Toolbar, Link, PageContent } from 'framework7-react';
import { IoCloseCircleOutline } from 'react-icons/io5';


const ModalSheet = ({id, children, position = 'bottom', height = '300px'}) => (
    <Sheet
        backdrop
        swipeToClose
        position={position}
        className={id}
        style={{height}}
    >
        <Toolbar>
            <div></div>
            <div>
                <Link sheetClose={`.${id}`}>
                    <IoCloseCircleOutline size="30px"/>
                </Link>
            </div>
        </Toolbar>
        <PageContent>
            {children}
        </PageContent>
    </Sheet>
);

export default ModalSheet;
