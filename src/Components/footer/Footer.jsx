import My from "../../assets/my.jpg";
const Footer = () => {
  return (
      <div className="flex items-center justify-between py-5 mx-8">
          
          <div className="flex items-center gap-2">
              <img src={My} alt="broken image" className="h-8 w-7 rounded-full" />
              <p className="text-sm font-medium">Sagar Dabas</p>
          </div>
          <div className="font-light text-sm">© 2025 Sagar Dabas. All rights reserved.</div>
      
    </div>
  )
}

export default Footer
