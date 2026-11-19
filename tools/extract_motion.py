"""Pesquisa de movimento para FiloSinal. Só processar gravações autorizadas.
Python 3.11; pip install mediapipe==0.10.21 opencv-python
Uso: python extract_motion.py entrada.mp4 saida.json --permission "ID do termo de autorização"
Executar fora do site, em máquina da equipe. Não publica e não substitui revisão por sinalizante."""
import argparse
import json
import cv2
import mediapipe as mp
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("video")
parser.add_argument("output")
parser.add_argument("--permission", required=True)
a=parser.parse_args()
if not a.permission.strip():
    parser.error("Identifique a autorização antes de processar.")
cap=cv2.VideoCapture(a.video)
if not cap.isOpened():
    raise SystemExit("Não foi possível abrir o vídeo.")
fps=cap.get(cv2.CAP_PROP_FPS) or 30
frames=[]
def pts(result):
    return [[round(float(p.x),5),round(float(p.y),5),round(float(p.z),5)] for p in result.landmark] if result else None
try:
    with mp.solutions.holistic.Holistic(static_image_mode=False, model_complexity=1, refine_face_landmarks=True, min_detection_confidence=0.5, min_tracking_confidence=0.5) as detector:
        while True:
            ok,frame=cap.read()
            if not ok:
                break
            marks=detector.process(cv2.cvtColor(frame,cv2.COLOR_BGR2RGB))
            frames.append({"pose":pts(marks.pose_landmarks),"left":pts(marks.left_hand_landmarks),"right":pts(marks.right_hand_landmarks),"face":pts(marks.face_landmarks)})
finally:
    cap.release()
if not frames:
    raise SystemExit("Sem quadros processados.")
out={"schema":1,"fps":fps,"reviewStatus":"pending","frames":frames}
Path(a.output).write_text(json.dumps(out,separators=(",",":")),encoding="utf-8")
print(f"{len(frames)} quadros; revisão linguística e de privacidade obrigatória antes da publicação.")
