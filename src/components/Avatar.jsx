import AvatarImg from '../img/1 lvl.png'

export default function Avatar() {
    return(
        <div className="avatar">
          <div className="">
            <img src={AvatarImg} alt="" />
          </div>
        <div className="profileName">
      <h2>Surname Name</h2>
      <p>Student</p>
        </div>
    </div>
    )
}