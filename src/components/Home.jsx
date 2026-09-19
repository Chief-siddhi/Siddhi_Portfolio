import {locations} from "#constants/index.js";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const projects = locations.work?.children ??[];

const Home = () => {
    const {setActiveLocation}  = useLocationStore();
    const { openWindow } = useWindowStore();
    const handleOpenProjectFinder = (project)=>{
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(()=>{
        const mm = gsap.matchMedia();
        mm.add("(min-width: 640px)", () => {
            Draggable.create(".folder");
        });
        return () => mm.revert();
    },[])
  return (
    <section id='home'>
        <ul>
            {projects.map((project)=>(
                <li key={project.id} className={clsx("group folder", project.windowPosition)}
                onClick={()=>handleOpenProjectFinder(project)}
                >

                    <img src="/images/folder.png" alt={project.name}/>
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home
