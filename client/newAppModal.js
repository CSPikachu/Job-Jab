import React, { Component, form } from "react";
import {
  Container,
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  Select,
} from "@chakra-ui/react";

const NewAppModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("target", e.target);
  };

  return (
    <div>
      <Button onClick={onOpen}>+ New Job App</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Job Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Application Name</FormLabel>
                <Input name="application_name" placeholder="Application Name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Source</FormLabel>
                <Select placeholder="Select option">
                  <option value="1">Linkedin</option>
                  <option value="2">Indeed</option>
                  <option value="3">Monster</option>
                  <option value="4">Other</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Source URL</FormLabel>
                <Input name="source_url" placeholder="Source URL" />
              </FormControl>

              <FormControl>
                <FormLabel>Date Submitted</FormLabel>
                <Input
                  name="date_submitted"
                  placeholder="Date submitted"
                  type="date"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Resume & Cover Letter</FormLabel>
                <Input placeholder="Resume link" />
                <Input placeholder="Cover Letter link" />
              </FormControl>

              <FormControl>
                <FormLabel>Notes</FormLabel>
                <Input placeholder="Notes" />
              </FormControl>

              <Input type="submit" />
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewAppModal;
