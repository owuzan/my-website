import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container max-w-5xl px-4 mx-auto space-y-6">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-gray-900">Projeler</h1>
        <p className="text-gray-500 text-lg font-medium">
          Yaptığım projeleri detaylarıyla birlikte aşağıdan inceleyebilirsin.
        </p>
      </div>
      <div className="space-y-12">
        <ProjectCard
          title="ComponentWind"
          top={
            <div className="flex items-center space-x-4">
              <Badge noUpperCase color="blue">
                Next.js
              </Badge>
              <Badge noUpperCase color="orange">
                Firebase
              </Badge>
            </div>
          }
        >
          <p className="line-clamp-3">
            İsteyenin kayıt olup herkese açık olacak şekilde TailwindCSS ile
            yapmış olduğu component ve şablonları paylaşabileceği bir platform.
          </p>
          <div className="flex space-x-4 items-center">
            <Button icon={HiExternalLink} color="blue">
              ComponentWind
            </Button>
            <Button icon={FaGithub}>GitHub</Button>
          </div>
        </ProjectCard>
        <ProjectCard
          title="ComponentWind"
          top={
            <div className="flex items-center space-x-4">
              <Badge noUpperCase color="blue">
                Next.js
              </Badge>
              <Badge noUpperCase color="orange">
                Firebase
              </Badge>
            </div>
          }
        >
          <p className="line-clamp-3">
            İsteyenin kayıt olup herkese açık olacak şekilde TailwindCSS ile
            yapmış olduğu component ve şablonları paylaşabileceği bir platform.
          </p>
          <div className="flex space-x-4 items-center">
            <Button icon={HiExternalLink} color="blue">
              ComponentWind
            </Button>
            <Button icon={FaGithub}>GitHub</Button>
          </div>
        </ProjectCard>
        <ProjectCard
          title="ComponentWind"
          top={
            <div className="flex items-center space-x-4">
              <Badge noUpperCase color="blue">
                Next.js
              </Badge>
              <Badge noUpperCase color="orange">
                Firebase
              </Badge>
            </div>
          }
        >
          <p className="line-clamp-3">
            İsteyenin kayıt olup herkese açık olacak şekilde TailwindCSS ile
            yapmış olduğu component ve şablonları paylaşabileceği bir platform.
          </p>
          <div className="flex space-x-4 items-center">
            <Button icon={HiExternalLink} color="blue">
              ComponentWind
            </Button>
            <Button icon={FaGithub}>GitHub</Button>
          </div>
        </ProjectCard>
      </div>
    </div>
  );
}
