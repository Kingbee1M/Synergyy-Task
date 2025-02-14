"use client"
type ButtonProps = {
    button: {
      link: string;
      count: number;
      icon: string;
    };
  };

export default function NavButton ({ button }: ButtonProps) {
    return (
        <div className="group w-4/5 flex flex-row justify-between items-center py-2 px-4 hover:bg-navHover text-linkColor">
          <img src={button.icon} alt="icon" width={15} height={15} />
            <div className="w-1/2 text-left">{button.link}</div>
            <div>
               <img 
      src="/assets/Badge.svg" 
      alt="Pearl Logo" 
      width={20} 
      height={20} 
      className="flex transition-opacity duration-300 group-hover:hidden"
    />
              <span className="hidden group-hover:inline transition-opacity duration-300 group-hover:opacity-100">
      {button.count}
    </span>
    </div>
        </div>
    )
}