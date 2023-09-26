import { NavLink } from "react-router-dom";

const Menu = () => {
      return (
            <div>
                  <ul className="flex gap-12 items-center text-xl font-medium">
                        <li>
                              <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "text-black"
                                    }
                              >
                                    Home
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                              >
                                    Donation
                              </NavLink>
                        </li>
                        <li>
                              <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                              >
                                    Statistics
                              </NavLink>
                        </li>
                        
                  </ul>
            </div>
      );
};

export default Menu;