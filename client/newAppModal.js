import React, { Component, form, useState } from 'react';

import {
  Container,
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Button,
  Text,
  Textarea,
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
} from '@chakra-ui/react';
import './css/styles.scss';

const NewAppModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // set state {}
  // {form: {applicationName: sdfdsf, source: sdfdsfd}}

  const handleSubmit = (e) => {
    // fetch <-- state values in the req body
    // bound function in jobapps that gets passed down to newApp which refetches data from API
    e.preventDefault();
    fetch('/jobapps', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      props.renderApps();
      setformData({});
    });
    //.then update state jobapps by fetching.
    // console.log('target', e.target);
    // console.log('inside handlesubmit console log app name', formData);
  };

  const handleChange = (e) => {
    let fieldName = e.target.name.toString();
    let obj = { ...formData };
    obj[fieldName] = e.target.value;
    setformData(obj);
  };
  const [formData, setformData] = useState({ application_name: '' });
  // const [formData, setformData] = useState({ application_name: "", userid: 4 });

  return (
    <div>
      <Button
        bg='#708d8a'
        _hover={{ color: '#708d8a', bg: '#eaf1f3' }}
        style={{ marginTop: '12px' }}
        onClick={onOpen}
      >
        + New Job App
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Job Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Application Name</FormLabel>
                <Input
                  name='application_name'
                  placeholder='Application Name'
                  value={formData.application_name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Source</FormLabel>
                <Select
                  name='sourceid'
                  placeholder='Select option'
                  onChange={handleChange}
                >
                  <option value='1'>Linkedin</option>
                  <option value='2'>Indeed</option>
                  <option value='3'>Monster</option>
                  <option value='4'>Other</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Application URL</FormLabel>
                <Input
                  name='application_folder_link'
                  placeholder='Source URL'
                  value={formData.application_folder_link}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Date Submitted</FormLabel>
                <Input
                  name='date_submitted'
                  placeholder='Date submitted'
                  type='date'
                  value={formData.date_submitted}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Resume & Cover Letter</FormLabel>
                <Input
                  placeholder='Resume link'
                  name='resume_doc_link'
                  value={formData.resume_doc_link}
                  onChange={handleChange}
                />
                <Input
                  placeholder='Cover Letter link'
                  name='cover_letter_doc_link'
                  value={formData.cover_letter_doc_link}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <Select
                  name='statusid'
                  placeholder='Select option'
                  onChange={handleChange}
                >
                  <option value='1'>considering applying</option>
                  <option value='2'>working on application</option>
                  <option value='3'>applied</option>
                  <option value='4'>currently interviewing</option>
                  <option value='5'>interviewed - no response</option>
                  <option value='6'>rejected</option>
                  <option value='7'>offer accepted</option>
                  <option value='8'>offer rejected</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Notes</FormLabel>
                <Input
                  placeholder='Notes'
                  name='notes'
                  value={formData.notes}
                  onChange={handleChange}
                />
              </FormControl>
              <Input type='submit' onClick={onClose} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
//
export default NewAppModal;
