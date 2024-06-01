const ItemChat = ({ content, role }: Message) => {  
  return (
    <a className="list-group-item list-group-item-action active text-white rounded-0">
      <div className={`media ${role == 'user' ? 'bg-gray': 'bg-primary'}`}>
        <div className="media-body ml-4">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0">{role}</h6>
            <small className="small font-weight-bold">fecha:</small>
          </div>
          <p className="font-italic mb-0 text-small">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default ItemChat;
