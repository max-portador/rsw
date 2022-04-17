import React, {FC} from 'react';

type ContactPropsType = {
    contactTitle: string,
    contactValue: string
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue})=> {
    return <div key={contactTitle}>
        <pre><b>{`${contactTitle.padEnd(10, " ")}`}:</b> {contactValue || null}</pre>
    </div>

}

export default Contact;