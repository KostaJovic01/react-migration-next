import MobileNav from "@/app/components/Nav/MobileNav";
import SearchHeader from "@/app/components/InquiryComponents/searchHeaderComponents/SearchHeader";
import InquiriesList from "@/app/components/InquiryComponents/InquiriesList";
import NewInquirieButton from "@/app/components/InquiryComponents/NewInquirieButton";
import Modal from "@/app/components/Modal";
import NewInquirieForm from "@/app/components/InquiryComponents/NewInquirieForm";
import React from "react";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";
import Toast from "@/app/components/Toast";

type Props = {};
const InquiriesPage = (props: Props) => {
  const {
    isSearchOpen,
    handleOpenSearch,
    isModalOpen,
    setIsModalOpen,
    showToast,
    handleToastVisibility,
  } = useInquiriesContext();
  return (
    <div
      className={
        "relative flex h-screen min-w-[40%] flex-grow flex-col p-6 pt-32"
      }
    >
      <div className="hidden bg-blue-300 bg-blue-500 bg-green-300 bg-green-500 bg-orange-300 bg-orange-500 bg-red-300 bg-red-500"></div>
      <MobileNav handleOpenSearch={() => handleOpenSearch()}>
        {isSearchOpen && <SearchHeader />}
      </MobileNav>
      <h1 className="text-3xl">Inquiries</h1>
      <InquiriesList />
      <NewInquirieButton />
      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <NewInquirieForm />
      </Modal>
      <Toast
        message={"Inquiry successfully saved"}
        show={showToast}
        setShow={handleToastVisibility}
      />
    </div>
  );
};
export default InquiriesPage;
