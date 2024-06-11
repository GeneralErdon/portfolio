// src/components/ProjectPage.tsx

import React, { useState } from "react";
import { styled, Modal, Box, IconButton, CSSObject } from "@mui/material";
import { FaGithub, FaLock, FaUnlock } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Project } from "types/Project";

interface ProjectCardProps {
  project: Project;
}

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BoxStyle: CSSObject = {
  maxWidth: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: 4,
  position: "relative",
};

const ImageBox = styled(Box)(BoxStyle);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 my-1 px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="w-full h-32 object-cover cursor-pointer"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <div className="flex items-center">
        {project.isPrivate ? (
          <>
            <FaLock className="text-red-500" /> <span className="ml-1 font-semibold">Private</span>
          </>
        ) : (
          <FaUnlock className="text-green-500" />
        )}
        {!project.isPrivate && project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-500 hover:underline"
          >
            <FaGithub />
          </a>
        )}
      </div>
      <StyledModal open={isModalOpen} onClose={closeModal}>
        <ImageBox>
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged" className="w-full h-auto" />
          )}
          <IconButton
            onClick={closeModal}
            style={{ position: "absolute", top: 8, right: 8 }}
          >
            <FaTimes />
          </IconButton>
        </ImageBox>
      </StyledModal>
    </div>
  );
};

export default ProjectCard;
