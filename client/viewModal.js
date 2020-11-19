import React, { Component, form, useState } from "react";
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

const ViewModal = (id) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const appId = id.props;
  console.log("appId", appId);
  const [modal, setModal] = useState([]);

  const fetchModal = () => {
    fetch(`/jobapps/${appId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("this app's data", data);
        const singleApplication = data;
        console.log("single", singleApplication[0]);
        setModal(singleApplication[0]);
      });
  };

  const updateApp = (e) => {
    e.preventDefault();
    console.log("target", e.target);
  };

  return (
    <div>
      <Button
        onClick={() => {
          onOpen(), fetchModal();
        }}
      >
        View Application
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View & Edit Your Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={updateApp}>
              <FormControl>
                <FormLabel style={{ fontWeight: "bold" }}>
                  Date Submitted: {modal.date_submitted}
                </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel style={{ fontWeight: "bold" }}>
                  Current Application Name:
                </FormLabel>
                <Text>
                  {modal.application_name}
                  <br />
                  <br />
                  If you would like to update this, please enter new Application
                  Name below:
                </Text>
                <Input
                  name="application_name"
                  placeholder="Update Application Name"
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>
                  Resume Link:
                  <br />
                  {modal.resume_doc_link}
                </FormLabel>
                <Input placeholder="Resume link" />
                <FormLabel>
                  Cover Letter Link:
                  <br />
                  {modal.cover_letter_doc_link}
                </FormLabel>
                <Input placeholder="Cover Letter link" />
              </FormControl>

              <FormControl>
                <FormLabel>
                  Notes:
                  <br />
                  {modal.notes}
                </FormLabel>
                <Input placeholder="Notes" />
              </FormControl>
              <br />
              <br />
              <Input type="submit" />
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ViewModal;
