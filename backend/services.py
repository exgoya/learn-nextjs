import sqlalchemy.orm as _orm
import passlib.hash as _hash
import database as _database
import models as _model
import schemas as _schemas

def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)

def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
async def get_user_by_email(email: str, db: _orm.Session):
   return db.query(_model.User).filter(_model.User.email == email).first()

async def create_user(user: _schemas.UserCreate, db: _orm.Session):
    user_obj = _model.User(email=user.email, hashed_password=_hash.bcrypt.hash(user.hashed_password))
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj