import s from './ProfileInfo.module.css'

const ProfileInfo = ()=>{
    return(
        <div>
            <div>
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + text
            </div>
        </div>
    )
};

export default ProfileInfo;


