import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Box,
  Text,
  Select,
  SimpleGrid,
  InputGroup,
  Input,
  InputLeftAddon,
  Stack,
  Image,
  Flex,
  Button,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  ButtonGroup,
  useDisclosure,
  Grid,
  GridItem,
  Avatar,
  Badge,
  Tag,
  TagLabel,
  HStack,
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  
} from "@chakra-ui/react";
import { FcEmptyTrash } from "react-icons/fc";
import "./App.css";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap={5} px={{ base: "5%", md: "15%" }} py={3} fontSize="sm" bgColor=".500" fontFamily="poppins">
        <Text>Hubungi</Text>
        <Spacer />
        <Text>Hubungi : 0761-999</Text>
        <Text>Loker</Text>
      </Flex>

      <Flex minWidth="max-content" alignItems="center" gap={5} mx={{ base: "5%", md: "20%" }} my={5} fontFamily="poppins">
        <Box p={5}>
          <Heading as="h2" size="lg" fontWeight="bold" color="green.500">
            Nganggur nih
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup>
          <Button onClick={onOpen} colorScheme="green" size="sm" variant="ghost">
            Cart
          </Button>
          <Button onClick={onOpen} colorScheme="green" size="sm">
            Login
          </Button>
        </ButtonGroup>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered fontFamily="poppins">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon children="ID" />
                <Input type="text" placeholder="Input Your Username" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="PW" />
                <Input type="password" placeholder="Input Your Password" />
              </InputGroup>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button onClick={onClose}>Close</Button>
              <Button onClick={onClose}>Login</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="ghost"
        mx={{ base: "5%", md: "15%" }}
        mb={5}
        fontFamily="poppins"
        bgImage="url('https://mamikos.com/general/img/pictures/home/bg_hero_section_top.png')"
        bgPos="bottom"
        bgRepeat="no-repeat"
      >
        <Stack>
          <CardBody>
            <Heading size="xl">Bosen dirumah? Pengen coba hal baru?</Heading>
            <Text py={2}>Mulai dari sini</Text>
          </CardBody>
          <CardFooter>
            <InputGroup>
              <InputLeftAddon bg="green.500" color="white">
                Kota
              </InputLeftAddon>
              <Input type="select" placeholder="Kota Kamu" />
            </InputGroup>
          </CardFooter>
        </Stack>
      </Card>
      <Box fontFamily="poppins">
        <Card mx={{ base: "5%", md: "15%" }} mb={5} bgImage="url('https://mamikos.com/assets/home-desktop/landing-owner-entry-point-background.png')" bgPos="right" bgRepeat="no-repeat" boxShadow="2xl">
          <CardHeader>
            <Heading size="xl"> Diskon Pengangguran</Heading>
          </CardHeader>
          <CardBody>
            <Text fontWeight="400">Dari pada diributin orang rumah, yuk ngekos aja.</Text>
            <Text>mulai dari IDR. 35.000/hari</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={onOpen} colorScheme="green">
              Yuk Pesen
            </Button>
          </CardFooter>
        </Card>
      </Box>
      <Tabs variant="enclosed" mx={{ base: "5%", md: "15%" }}>
        <TabList mb="1em" colorScheme="green">
          <Tab>Kamar Kos</Tab>
          <Tab>Apartemen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <Heading size="md">Promo Tiduran</Heading>
              <Select variant="flushed" size="lg" placeholder="Semua Kota">
                <option value="option1">Kota Tangerang</option>
                <option value="option2">DKI Jakarta</option>
                <option value="option3">Bekasi</option>
              </Select>
            </Box>
            {/* card */}
            <Box py="1%">
              <Flex textAlign="justify" spacing={4} gap={2} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                <Card maxW="xs" boxShadow="xl">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Sofa Teras Tetangga</Heading>
                      <Text>Nikmati Tidur secara vertikal dan tidak Rebahan</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. 35000/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="xl">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1451156351305-d4f9bff58036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Hutan Sebelah</Heading>
                      <Text>Nikmati Tidur nyaman dengan kesan Natural</Text>
                      <Text color="green.600" fontSize="md">
                        Rp.Free/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="xl">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1530519362533-b36020711133?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Ruko Kesukaanmu</Heading>
                      <Text>Nikmati Tidur dekat dengan tempat jajanmu</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. 2000/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="xl">
                  <CardBody>
                    <Image src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=2074&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">SPBU Terdekat</Heading>
                      <Text>Nikmati Pengalaman dikunjungi berbagai teman diluar sana</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. Free/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="xl">
                  <CardBody>
                    <Image src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2071&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Kasur Temen</Heading>
                      <Text>Nikmati Tidur secara vertikal dan tidak Rebahan</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. Thankyou/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Heading size="md">Promo Apartemen</Heading>
              <Select variant="flushed" size="lg" placeholder="Semua Kota">
                <option value="option1">Kota Tangerang</option>
                <option value="option2">DKI Jakarta</option>
                <option value="option3">Bekasi</option>
              </Select>
            </Box>
            {/* card */}
            <Box py="3%" justify="center">
              <Flex>
                <Card maxW="xs" boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1616424525708-d712e19c6da8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Ini Mah Apartemen</Heading>
                      <Text>Nikmati Tidur secara vertikal dan tidak Rebahan</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. 35000/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={onOpen} variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1676935775277-5cf88f59ad3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Ini Apartemen</Heading>
                      <Text>Nikmati Tidur nyaman dengan kesan Natural</Text>
                      <Text color="green.600" fontSize="md">
                        Rp.Free/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={onOpen} variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1498457253449-cca31e5cb09f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Ini Juga Apartemen</Heading>
                      <Text>Nikmati Tidur dekat dengan tempat jajanmu</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. 2000/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={onOpen} variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="2xl">
                  <CardBody>
                    <Image src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=2074&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Ini Bukan</Heading>
                      <Text>Bukan Apartemen</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. Free/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={onOpen} variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
                <Card maxW="xs" boxShadow="2xl">
                  <CardBody>
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1678898322086-4e7820f90bb3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Apartemen Gitu</Heading>
                      <Text>ya gitu</Text>
                      <Text color="green.600" fontSize="md">
                        Rp. Thankyou/Hari
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={onOpen} variant="solid" colorScheme="green" align="center">
                      Yuk Datang
                    </Button>
                  </CardFooter>
                </Card>
              </Flex>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box m={{ base: "2%", md: "5% 15%" }} textAlign="center">
        <Heading size="xl"> Our Partner </Heading>
        <Flex templateColumns="repeat(5, 1fr)" gap={6} m="2% 15%">
          <Card>
            <CardHeader>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <Avatar src="https://bit.ly/sage-adebayo" size="xs" name="Segun Adebayo" ml={-1} mr={2} />
                <TagLabel>Segun</TagLabel>
              </Tag>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Stack direction="row">
                <Badge colorScheme="green">Success</Badge>
                <Badge colorScheme="red">Helping</Badge>
                <Badge colorScheme="purple">Todos</Badge>
              </Stack>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <Avatar src="https://bit.ly/sage-adebayo" size="xs" name="Segun Adebayo" ml={-1} mr={2} />
                <TagLabel>Segun</TagLabel>
              </Tag>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Stack direction="row">
                <Badge colorScheme="green">Success</Badge>
                <Badge colorScheme="red">Helping</Badge>
                <Badge colorScheme="purple">Todos</Badge>
              </Stack>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <Avatar src="https://bit.ly/sage-adebayo" size="xs" name="Segun Adebayo" ml={-1} mr={2} />
                <TagLabel>Segun</TagLabel>
              </Tag>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Stack direction="row">
                <Badge colorScheme="green">Success</Badge>
                <Badge colorScheme="red">Helping</Badge>
                <Badge colorScheme="purple">Todos</Badge>
              </Stack>
            </CardFooter>
          </Card>
        </Flex>
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple m={{ base: "1%", md: "5% 15%" }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Faq
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Help
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Container textAlign="center" fontSize="12px" fontWeight="400" p="1%" fontFamily="poppins">
        <Text>Rahmad@importir.id</Text>
      </Container>
    </>
  );
}

export default App;
