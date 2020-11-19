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
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  ModalFooter,
  useDisclosure,
  Select,
} from '@chakra-ui/react';

const ViewModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const appId = props.applicationId;
  console.log('appId', appId);
  const [modal, setModal] = useState([]);
  const [formData, setFormData] = useState({});

  const fetchModal = () => {
    fetch(`/jobapps/${appId}`)
      .then((res) => res.json())
      .then((data) => {
        const singleApplication = data;
        let date = data[0].date_submitted.split('').slice(0, 10).join('');
        data[0].date_submitted = date;
        setFormData(data[0]);
        setModal(singleApplication[0]);
      });
  };

  // create a hook for state
  // when we fetch the info from the database, store that in state
  // modal fields will pull from state and onchance update state
  // on submit we do a Patch request with all of the data in state

  const handleChange = (e) => {
    let fieldName = e.target.name.toString();
    let obj = { ...formData };
    obj[fieldName] = e.target.value;
    setFormData(obj);
  };

  const updateApp = (e) => {
    e.preventDefault();
    fetch(`/jobapps/${appId}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      props.renderApps();
    });
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
                <FormLabel>Application Name</FormLabel>
                <Input
                  name='application_name'
                  placeholder='Application Name'
                  value={formData.application_name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Source</FormLabel>
                <Select
                  name='sourceid'
                  placeholder='Select option'
                  onChange={handleChange}
                  value={formData.sourceid}
                >
                  <option value='1'>Linkedin</option>
                  <option value='2'>Indeed</option>
                  <option value='3'>Monster</option>
                  <option value='4'>Other</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Application URL</FormLabel>
                <Input
                  name='application_folder_link'
                  placeholder='Source URL'
                  value={formData.application_folder_link}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
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

              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  name='statusid'
                  placeholder='Select option'
                  onChange={handleChange}
                  value={formData.statusid}
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
                <FormLabel>Offer Salary</FormLabel>
                <Input
                  name='offer_salary'
                  placeholder='Offer Salary'
                  value={formData.offer_salary}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Notes</FormLabel>
                <Textarea
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

export default ViewModal;

// <FormControl>
//                 <FormLabel style={{ fontWeight: 'bold' }}>
//                   Date Submitted: {formData.date_submitted}
//                 </FormLabel>
//               </FormControl>

//               <FormControl>
//                 <FormLabel style={{ fontWeight: 'bold' }}>
//                   Current Application Name:
//                 </FormLabel>

//                 <Text>
//                   {modal.application_name}
//                   <br />
//                   <br />
//                   If you would like to update this, please enter new Application
//                   Name below:
//                 </Text>

//                 <Input
//                   name='application_name'
//                   placeholder='Update Application Name'
//                 />

//               </FormControl>
//               <br />
//               <FormControl>

//                 <FormLabel>
//                   Resume Link:
//                   <br />
//                   {modal.resume_doc_link}
//                 </FormLabel>

//                 <Input placeholder='Resume link' />

//                 <FormLabel>
//                   Cover Letter Link:
//                   <br />
//                   {modal.cover_letter_doc_link}
//                 </FormLabel>

//                 <Input placeholder='Cover Letter link' />
//               </FormControl>

//               <FormControl>
//                 <FormLabel>
//                   Notes:
//                   <br />
//                   {modal.notes}
//                 </FormLabel>

//                 <Input placeholder='Notes' />
//               </FormControl>
//               <br />
//               <br />
//               <Input type='submit' />
//               <Button onClick={onClose}>Cancel</Button>

// application_folder_link: "asdfasd"
// application_name: "CS Fellow Application"
// cover_letter_doc_link: "avzxgawf"
// cover_letter_pdf_link: null
// creation_date: "2020-11-19T06:47:30.065Z"
// date_submitted: "2020-11-18T05:00:00.000Z"
// id: 32
// notes: "awere"
// offer_salary: null
// resume_doc_link: "werasdfw"
// resume_pdf_link: null
// sourceid: 1
// statusid: 1
// userid: 4
